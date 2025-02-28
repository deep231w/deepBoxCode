import http  from "http";

import express from "express";

import {Server} from "socket.io"

const app =express();

const server= http.createServer(app);

const io = new Server({
    cors:{
        origin:"*",
        methods:["POST", "GET"]
    }
})

io.attach(server);

server.listen(3000, ()=>{
    console.log("server running on port 3000");
})