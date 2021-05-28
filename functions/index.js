const functions = require("firebase-functions");

// for access to the database
const admin = require("firebase-admin");

// .firebaserc already knows which project so we don't need to pass one
admin.initializeApp();

// so we can replace admin.firestore() with db
const db = admin.firestore();

// Express server to use routes
const express = require("express");
const app = express();

// init firebase to use in user signup/login auth
const config = require("./Firestore");

const firebase = require("firebase");
firebase.initializeApp(config);

///////////////////////////////////////// SUBMISSIONS //////////////////////////////////////
app.get("/submissions", (req, res) => {
    db.collection("submissions")
        .get()
        .then((data) => {
            let submissions = [];
            data.forEach((doc) => {
                submissions.push(doc.data());
            });

            return res.json(submissions);
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
});

app.post("/submissions", (req, res) => {
    const newSubmission = {
        patientName: req.body.patientName,
        highrisk: req.body.highrisk,
        immuno: req.body.immuno,
        symptoms: req.body.symptoms,
        collectionDate: req.body.collectionDate,
        onsetDate: req.body.onsetDate,
        createdAt: new Date().toISOString(),
    };

    admin
        .firestore()
        .collection("submissions")
        .add(newSubmission)
        .then((doc) => {
            res.json({ message: `Document ${doc.id} has been created.` });
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
});

///////////////////////////////////////// USER AUTH ////////////////////////////////////////////
// LOG IN
app.post("/login", (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return res.json({ token });
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
});

// SIGN UP
app.post("/signup", (req, res) => {
    // create new user object with request parameters
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        userName: req.body.userName,
    };

    // declare variables so we can use it later
    let token, userId;

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
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((userToken) => {
            token = userToken;
            const userCredentials = {
                userName: newUser.userName,
                email: newUser.email,
                userId: userId,
            };
            return db.doc(`/users/${newUser.userName}`).set(userCredentials);
        })
        .then(() => {
            return res.status(201).json({ token });
        })
        // catch if creation failed
        .catch((err) => {
            console.error(err);
            if (err.code === "auth/email-already-in-use") {
                return res.status(400).json({ email: "Email in use." });
            } else {
                return res.status(500).json({ error: err.code });
            }
        });
});

// a best practice for apis
// https://website.com/api/

exports.api = functions.https.onRequest(app);
