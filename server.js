import express from "express";
import { Server as IOServer } from "socket.io";
import { Server as HttpServer } from "http";
import session from "express-session";
import MongoStore from "connect-mongo";

import {initWebSocket} from "./src/sockets/index.js";
import {router} from "./src/routes/index.js";

//creo un servidor HTTP y websockets
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const httpServer = new HttpServer(app);
export const io = new IOServer(httpServer);

//inicio los WebSockets:
initWebSocket(io);

//Configuro cookies con Mongo Atlas:
app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://davidtrabanco:74108520@cluster0.zbawm.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true},
    }),
    secret: "123456",
    resave: true,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 1 * 60000,
    },
}))

//Configuro Rutas y Public
app.use("/", router)
app.use(express.static('./public'));


//Inicio Servidor:
const PORT = process.env.PORT || 8080;
const activeServer = httpServer.listen(PORT, ()=>console.log(`HTTP Server Up on Port ${activeServer.address().port}`))
activeServer.on('error', err => console.error(err));
