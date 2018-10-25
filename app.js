const express = require('express');
const log = require('cf-nodejs-logging-support');
const env = require('dotenv').config(); // for local testing

const app = express();

// Set the minimum logging level (Levels: error, warn, info, verbose, debug, silly)
log.setLoggingLevel("info");

// Bind to express app
app.use(log.logNetwork);

app.get("/", (req, res) => {
   req.logMessage("info", "Home Check Successful)");
   res.send('Home');
});

app.get("/healthcheck", (req, res) => {
   req.logMessage("info", "Health Check Successful)");
   res.send('Hello World!');
});

app.post("/query/messages", (req, res) => {
   let correlationId = req.header('X-Correlation-Id');
   let message = generateRandomMessageWithDelay();
   res.set('X-Correlation-Id', correlationId);
   res.send(JSON.stringify(message));
});

async function postInvoice(req, res) {
   let correlationId = req.header('X-Correlation-Id');
   let delay = Math.floor(Math.random() * Math.floor(2000));
   let message = await generateRandomMessageWithDelay();

   res.set('X-Correlation-Id', correlationId);
   res.send(JSON.stringify(message));
}

function generateRandomMessageWithDelay(delay) {
   let message = {
      "sender-id": "uuid",
      "reciever-id": "uuid",
      "message-id": "uuid",
      "message-payload": "message as string here..."
   }

   let senderId;
   let recieverId;
   let messageId;
   let messagePayload;
   console.log(message);
   return message;
   //return message after specified delay
   // setTimeout(() => { return message }, delay);
}

app.listen(8081, () => console.log(`mock-blockchain-swagger-ui listening on port 8081!`));
log.logMessage("info", "Server is listening on port %d", 8081);