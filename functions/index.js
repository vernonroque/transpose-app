const functions = require("firebase-functions");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
// const fs = require("fs");
// const pdfParse = require("pdf-parse");

// API
// App config
const app = express();


// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
app.use(fileUpload());

//  temporary storage variable
// API routes
app.get("/", (request, response) => response.status(200).send("hey baus!"));

app.post("/submitPDF", (request, response)=>{
  console.log("Made a post request>>>", request.body.pdfFile);
  // pdfParse(request.files.pdfFile).then((result)=>{
  //   console.log("The text>>>", result.text);
  // });
  response.status(201).send({message: "File upload successful"});
});

// Listen command
exports.api = functions.https.onRequest(app);


/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/*
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
*/
