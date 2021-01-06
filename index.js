const WebSocket = require('ws');
const MongoClient = require('mongodb').MongoClient;

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('message from server');
});

MongoClient.connect("mongodb://localhost:27017/whiteboard", { useUnifiedTopology: true }, function(err, db) {
    if(!err) {
        console.log("We are connected");
    } else {
        console.log(err);
    }
});