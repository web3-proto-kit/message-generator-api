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
JSON ARRAY
```
[
  {
    "sender-id": "uuid",
    "reciever-id": "uuid",
    "message-id": "uuid",
    "message-payload: "message as string here..."
  }
]
```


