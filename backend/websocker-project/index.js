const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
app.use(express.static(path.resolve("./public")));
const server = http.createServer(app);


//routes 
app.get("/", (req, res) => {
    return res.sendFile("/public/index.html");
})

// socket create

const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("input-message", (message) => {
        console.log("socket Id", socket.id);
        io.emit("server-message", message);
    })
})


server.listen(9000, () => {
    console.log("Server started at ", 9000);
})
