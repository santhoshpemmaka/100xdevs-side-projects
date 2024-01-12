const express = require('express');
const bodyParser = require("body-parser");
const http = require('http');
const cors = require('cors');
import SocketService from "./services/socket";


const app = express();
app.use(cors());
const httpServer = http.createServer();

app.use(bodyParser.json());

const socketService = new SocketService();

socketService.io.attach(httpServer);

socketService.initListener();
const PORT = process.env.PORT ? process.env.PORT : 8000;

app.get('/', (req:any, res:any) => {
    return res.send("Hello from server")
})

httpServer.listen(PORT, () => {
    console.log(`HTTP Server started at PORT:${PORT}`);
})