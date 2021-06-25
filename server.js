const express = require("express");

const app = express();

app.use('/static', express.static('static'));

app.get("/", (req, res)=> {
    res.sendFile(__dirname+"\\index.html");
})

app.listen(3000, (req, res) => {
    console.log("Server started running on port 3000");
})