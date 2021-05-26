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

    // send create request to firebase
    firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((data) => {
            // if created successfully we get a promise with the new users data
            return res
                .status(201)
                .json({ message: `${data.user.uid} signed up successfully` });
        })
        // catch if creation failed
        .catch((err) => {
            console.error(err);
            return res.status(500).error({ error: err.code });
        });
});

// a best practice for apis
// https://website.com/api/

exports.api = functions.https.onRequest(app);
