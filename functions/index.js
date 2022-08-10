const functions = require("firebase-functions");


const express = require("express");
const cors = require("cors");
const stripe = require('stripe')(
'sk_test_51LKa8EKYVRMXo1QnrJhqZT4XcnuHKkMShTcuJd0XpTBlrIihgWFroeOb1dZXofkKsLIsYZ1qm5nCXmGOTutaOY4H00abbBP2Ac'
);
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });
})
exports.api = functions.https.onRequest(app);
// (http://localhost:5001/project-c630a/us-central1/api).

