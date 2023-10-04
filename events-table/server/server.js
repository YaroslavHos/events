const express = require('express');
const app = express();
const axios = require('axios');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const { createServer } = require("http");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "wKLnv490",
    database: "EventsList",
})
app.use(cors())
app.use(express.json());
app.get("/events", (req, res) => {
    const sqlSelect = "SELECT * FROM event"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});
app.post("/insert", (req, res) => {
    const eventName = req.body.eventName;
    const eventSeverity = req.body.eventSeverity;
    const timestamp = req.body.timestamp;
    const sqlInsert = "INSERT INTO event (name, severity, timestamp) VALUES (?,?,?);"
    db.query(sqlInsert, [eventName, eventSeverity, timestamp], (err, result) => {
        console.log(result, 'result')
        console.log(err, 'error')
    })
})
app.put("/ignored/:id", (req, res) => {
    console.log('ignore event')
    const eId = req.params.id;
    const ignored = req.body.ignored;

    const sqlUpdate = 'UPDATE event SET ignored=? WHERE id=?'

    db.query(sqlUpdate, [ignored, eId], (err, result) => {
        if (err) return console.log(err)
        console.log(res, "updated")
    })
})
app.put("/reported/:id", (req, res) => {
    const eId = req.params.id;
    const reported = req.body.reported;

    const sqlUpdate = 'UPDATE event SET reported=? WHERE id=?'

    db.query(sqlUpdate, [reported, eId], (err, result) => {
        if (err) return console.log(err)
        console.log(res, "updated")
    })
})

app.put("/update/:id", (req, res) => {
    const eId = req.params.id;
    const eventName = req.body.eventName;
    const eventSeverity = req.body.eventSeverity;
    const timestamp = req.body.timestamp;
    const sqlUpdate = "UPDATE event SET name=?, severity=?, timestamp=? WHERE id=?"
    db.query(sqlUpdate, [eventName, eventSeverity, timestamp, eId], (err, result) => {
        if (err) return console.log(err)
        console.log(result, 'result')
    })
})

app.delete("/delete/:id", (req, res) => {
    const eId = req.params.id;
    const sqlDelete = 'DELETE FROM event WHERE id=?'

    db.query(sqlDelete, eId, (err, data) => {
        if (err) return console.log(err)
        console.log(res, "deleted")
    })
})
const port = 3001;
const server = createServer(app);
server.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});

const webSocket = require('ws');
const wss = new webSocket.Server({ path: "/ws", server });
const clients = new Set();

wss.on('connection', function (socket) {
    //clients.add(socket);
    console.log('Client just connected');
    // wss.clients.forEach(function (client) {
    //     db.query("SELECT * FROM event", function (err, result) {
    //         if (err) throw err;
    //         client.send(JSON.stringify(result));
    //     });
    // })
    socket.send("Welcome to the server")
    socket.on('message', function message(data) {

        console.log(`Received message from client: ${data}`);

        // wss.clients.forEach(function (client) {
        //     client.send('Someone said: ' + msg);
        //
        // })
    })
    socket.on("close", () => {
        //clients.delete(socket);
        console.log("WebSocket connection closed");
    });
})

console.log((new Date()) + 'Server is listening on port 3001')