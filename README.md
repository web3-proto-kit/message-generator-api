# mock-blockchain-swagger-ui
REST API 

# Endpoints

## POST: /query/messages
Request Payload:
```
JSON
{
    "time-stamp": "datetime"
}
```
Response Payload:
```
JSON ARRAY
[
  {
    "sender-id": "uuid",
    "reciever-id": "uuid",
    "message-id": "uuid",
    "message-payload: "message as string here..."
  },
  ...
]
```

# Usage
1. Clone the directory
2. npm run start:dev
3. npm scripts
   - npm start
   - npm run dev:build
   - npm run dev:build
   - npm run start:dev:ssh 
   - npm run start:dev

Access at http://localhost:8085/
