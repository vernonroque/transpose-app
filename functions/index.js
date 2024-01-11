const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const pdfParse = require("pdf-parse");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({storage: storage});

// API
// App config
const app = express();
// Use express.urlencoded() middleware to parse URL-encoded bodies
// app.use(express.urlencoded({extended: true}));


// Middlewares
app.use(cors({origin: true}));
// app.use(express.json());

//  temporary storage variable
// API routes
app.get("/", (request, response) => response.status(200).send("hey baus!"));

app.post("/submitPDF", upload.single("pdfFile"), (request, response)=>{
  console.log("Made a post request>>>", request.file);

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
