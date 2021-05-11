const express = require("express");
const app: ExpressApp = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const fs = require("fs");

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

walk("frontend/build");




server.listen(3000, () => {
    console.log("listening on *:3000");
});