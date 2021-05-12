const express = require("express");
const app: ExpressApp = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const path = require("path");
const fs = require("fs");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jwt-then");
require("dotenv").config();

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname +"../../../frontend/index.html"));
});

function walk (directoryName: string): void{
    const directory: string[] = fs.readdirSync(directoryName);

    for(let i = 0; i < directory.length; i++) {
        const filePath: string = path.join(directoryName, directory[i]);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            walk(filePath);
        }
        else{
            const splittedFileName = directory[i].split(".");
            if(splittedFileName[splittedFileName.length -1] === "css" || splittedFileName[splittedFileName.length -1] === "js"){
                app.get(filePath, (req, res) => {
                    res.sendFile(path.resolve(__dirname +"../../../" + filePath));
                });
            }
        }
    }
}

let db: DataBase;
async function loadDB (){
    db = await sqlite.open({
        "filename": "backend/database.db",
        "driver": sqlite3.Database
    });
    createUsersTable();
    createSchoolsTable();
}




walk("frontend/build");

app.post("/register", jsonParser, register);

app.post("/login", jsonParser, login);

app.post("/schools/create", jsonParser, authorize, createNewSchool);


io.on("connection", async (socket: Socket) => {
    const token = socket.handshake.query.token;
    if(!token){
        socket.disconnect();
        return;
    }
    try{
        const payload = await jwt.verify(token, process.env.SECRET);
        socket.userId = payload.id;
    }
    catch(e){
        socket.disconnect();
        return;
    }
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});

loadDB();