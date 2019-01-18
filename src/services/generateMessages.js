import uuidv4 from 'uuid/v4';

const generateMessages = (max) => {
  // random amount of messages between 1 - max
  const numMessages = Math.floor(Math.random() * Math.floor(max));
  const messages = [];
  for (let i = 0; i < numMessages; i++) messages.push(buildMessage());
  return messages;
};

const buildMessage = () => {
  const message = {};
  message.senderId = uuidv4();
  message.recieverId = uuidv4();
  message.messageId = uuidv4();
  message.messagePayload = `message payload for ${message.messageId}`;

  console.log(message);
  return message;
};

export default generateMessages;
