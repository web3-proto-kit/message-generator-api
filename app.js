const express = require('express');
const log = require('cf-nodejs-logging-support');
const env = require('dotenv').config(); // for local testing
const generateMessages = require("./services/generateMessages").generateMessages;

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

app.get("/query/messages", (req, res) => {
   queryMessages(req, res);
});

async function queryMessages(req, res){
   try{
      let messages = await generateMessages(20);
      let correlationId = req.header('X-Correlation-Id');
      res.set('X-Correlation-Id', correlationId);
      res.send(JSON.stringify({"messages" : messages}));        
   }catch(err){
      console.log(err);
      req.logMessage("error", "Error generating messages.");
   } finally{
      req.logMessage("info", "Succesfully generated messaged.");
   }
}

app.listen(8081, () => console.log(`mock-blockchain-swagger-ui listening on port 8081!`));
log.logMessage("info", "Server is listening on port %d", 8081);