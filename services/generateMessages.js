const createUuid = require('../utility/create-uuid');

async function generateMessages(max) {
  // random amount of messages between 1 - max
  const numMessages = Math.floor(Math.random() * Math.floor(max));
  const messages = [];
  for (let i = 0; i < numMessages; i++) messages.push(buildMessage());
  return messages;
}

function buildMessage() {
  const message = {};
  message.senderId = createUuid.uuidv4();
  message.recieverId = createUuid.uuidv4();
  message.messageId = createUuid.uuidv4();
  message.messagePayload = `message payload for ${message.messageId}`;

  console.log(message);
  return message;
}

module.exports = { generateMessages };
