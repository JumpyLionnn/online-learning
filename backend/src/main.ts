const express = require("express");
const app: ExpressApp = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname +"../../../frontend/index.html"));
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});