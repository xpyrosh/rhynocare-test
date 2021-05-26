const functions = require("firebase-functions");

// for access to the database
const admin = require("firebase-admin");

// .firebaserc already knows which project so we don't need to pass one
admin.initializeApp();

// Express server to use routes
const express = require("express");
const app = express();

// init firebase to use in user signup/login auth
const config = require("./Firestore");

const firebase = require("firebase");
firebase.initializeApp(config);

// so we can replace admin.firestore() with db
const db = admin.firestore();

// app.get("/something", (req, res) => {
//     // do something
// });

// sign up
app.post("/signup", (req, res) => {
    // create new user object with request parameters
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        userName: req.body.userName,
    };

    // attempt to fetch a user from the DB with the matching name
    db.doc(`/users/${newUser.userName}`)
        .get()
        .then((doc) => {
            // if we did receive one from the DB that means it already exists
            if (doc.exists) {
                return res
                    .status(400)
                    .json({ userName: "This username is in use." });
            } else {
                // if we didn't receive one we then create this user
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        newUser.email,
                        newUser.password
                    );
            }
        })
        // return the user idtoken received from creation
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return res.status(201).json({ token });
        })
        // catch if creation failed
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
});

// a best practice for apis
// https://website.com/api/

exports.api = functions.https.onRequest(app);
