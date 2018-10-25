const createUuid = require("../utility/create-uuid");

async function generateMessages(max) {
   let delay = Math.floor(Math.random() * Math.floor(2000));
   //random amount of messages between 1 - max
   let numMessages = Math.floor(Math.random() * Math.floor(max));
   let messages = [];
   for(var i = 0; i < numMessages; i++)
      messages.push(buildMessage());
   return messages;
}

function buildMessage(delay) {
   let message = {}
   message.senderId = createUuid.uuidv4();;
   message.recieverId = createUuid.uuidv4();;
   message.messageId = createUuid.uuidv4();;
   message.messagePayload = "message payload for " + message.messageId;

   console.log(message);
   return message;
}

module.exports = { "generateMessages": generateMessages }
