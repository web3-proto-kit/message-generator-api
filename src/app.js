import '@babel/polyfill';
import express from 'express';
import log from 'cf-nodejs-logging-support';
import { generateMessages } from './services/generateMessages';

const app = express();

// Set the minimum logging level (Levels: error, warn, info, verbose, debug, silly)
log.setLoggingLevel('info');

// Bind to express app
app.use(log.logNetwork);

app.get('/', (req, res) => {
  req.logMessage('info', 'Home Check Successful)');
  res.send('Home');
});

app.get('/healthcheck', (req, res) => {
  req.logMessage('info', 'Health Check Successful)');
  res.send('Hello World!');
});

app.get('/query/messages', (req, res) => {
  queryMessages(req, res);
});

const queryMessages = async (req, res) => {
  try {
    const messages = await generateMessages(20);
    const correlationId = req.header('X-Correlation-Id');
    res.set('X-Correlation-Id', correlationId);
    res.send(JSON.stringify({ messages }));
  } catch (err) {
    console.log(err);
    req.logMessage('error', 'Error generating messages.');
  } finally {
    req.logMessage('info', 'Succesfully generated messaged.');
  }
};

app.listen(8085, () => console.log('mock-blockchain-swagger-ui listening on port 8085!'));
log.logMessage('info', 'Server is listening on port %d', 8085);
