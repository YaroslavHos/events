/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const app = express();
const axios = require('axios');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const { createServer } = require('http');
const connectDB = require('./connectDB');
const Events = require('./models/events')

const PORT = 3001;
connectDB();

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.get('/events', async (req, res) => {
  try {
    const data = await Events.find({});
    if (!data) {
      throw new Error('No data find')
    }
    //res.status(201).json(data)
    res.send(data)
  } catch (error) {
    console.log(error, 'error')
    res.status(500).json({ error: 'Some error' })
  }
})

app.post('/insert', async (req, res) => {
  try {
    const { name, description, severity, timestamp } = req.body;
    const data = await Events.create({ name, description, severity, timestamp })

    if (!data) {
      throw new Error('Error while creating event')
    }

    //res.status(201).json(data)
  } catch (error) {

    res.status(500).json({ error: 'Some error while creating event' })
  }
})

app.put('/update/:id', async (req, res) => {
  try {
    const { name, description, severity } = req.body;
    const id = req.params.id;
    const data = await Events.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    if (!data) {
      throw new Error('Error no data to update')
    }
    //res.status(201).send(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Some error while updating event' })
  }

})

app.listen(PORT, () => {
  console.log('server started on port 3001')
})



// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "wKLnv490",
//     database: "EventsList",
// })
// app.use(cors())
// app.use(express.json());
// app.get("/events", (req, res) => {
//     const sqlSelect = "SELECT * FROM event"
//     db.query(sqlSelect, (err, result) => {
//         //res.json(result)
//         res.send(result)
//     })
// });
// app.post("/insert", (req, res) => {
//     const eventName = req.body.name;
//     const eventSeverity = req.body.severity;
//     const timestamp = req.body.timestamp;
//     const description = req.body.description;
//     const sqlInsert = "INSERT INTO event (name, severity, timestamp, description) VALUES (?,?,?,?);"
//     db.query(sqlInsert, [eventName, eventSeverity, timestamp, description], (err, result) => {
//         console.log(result, 'result')
//         console.log(err, 'error')
//     })
// })
// app.put("/ignored/:id", (req, res) => {
//     console.log('ignore event')
//     const eId = req.params.id;
//     const ignored = req.body.ignored;
//
//     const sqlUpdate = 'UPDATE event SET ignored=? WHERE id=?'
//
//     db.query(sqlUpdate, [ignored, eId], (err, result) => {
//         if (err) return console.log(err)
//         console.log(res, "updated")
//     })
// })
// app.put("/reported/:id", (req, res) => {
//     const eId = req.params.id;
//     const reported = req.body.reported;
//
//     const sqlUpdate = 'UPDATE event SET reported=? WHERE id=?'
//
//     db.query(sqlUpdate, [reported, eId], (err, result) => {
//         if (err) return console.log(err)
//         console.log(res, "updated")
//     })
// })
//
// app.put("/update/:id", (req, res) => {
//     const eId = req.params.id;
//     const eventName = req.body.name;
//     const eventSeverity = req.body.severity;
//     const timestamp = req.body.timestamp;
//     const description = req.body.description;
//     const sqlUpdate = "UPDATE event SET name=?, severity=?, timestamp=?, description=? WHERE id=?"
//     db.query(sqlUpdate, [eventName, eventSeverity, timestamp, description, eId], (err, result) => {
//         if (err) return console.log(err)
//         console.log(result, 'result')
//     })
// })
//
// app.delete("/delete/:id", (req, res) => {
//     const eId = req.params.id;
//     const sqlDelete = 'DELETE FROM event WHERE id=?'
//
//     db.query(sqlDelete, eId, (err, data) => {
//         if (err) return console.log(err)
//         console.log(res, "deleted")
//     })
// })
// const port = 3001;
// const server = createServer(app);
// server.listen(port, () => {
//     console.log(`Starting server on port ${port}`);
// });
//
// const webSocket = require('ws');
// const wss = new webSocket.Server({ path: "/ws", server });
// const clients = new Set();
//
// wss.on('connection', function (socket) {
//     //clients.add(socket);
//     console.log('Client just connected');
//     // wss.clients.forEach(function (client) {
//     //     db.query("SELECT * FROM event", function (err, result) {
//     //         if (err) throw err;
//     //         client.send(JSON.stringify(result));
//     //     });
//     // })
//     socket.send("Welcome to the server")
//     socket.on('message', function message(data) {
//
//         console.log(`Received message from client: ${data}`);
//
//         // wss.clients.forEach(function (client) {
//         //     client.send('Someone said: ' + msg);
//         //
//         // })
//     })
//     socket.on("close", () => {
//         //clients.delete(socket);
//         console.log("WebSocket connection closed");
//     });
// })
//
// console.log((new Date()) + 'Server is listening on port 3001')