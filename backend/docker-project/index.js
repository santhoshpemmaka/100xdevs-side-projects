const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = `mongodb://${process.env.name}:27017/mydatabase`

const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
    console.log("The express server started");
    res.send("Hey form express server");
})

mongoose.connect(mongoURI).then(data => {
    app.listen(PORT);
    console.log("The server started in the 3000 PORT");
}).catch((err) => {
    console.log("Error occured in the server", err)

});
