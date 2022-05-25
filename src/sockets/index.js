import {socketProducts} from "./products.js";
import {socketChat} from "./chat.js";
import {socketLoginUser} from "./loginUser.js";

export const initWebSocket = (io) =>{

    //sockets Productos
    socketProducts(io);

    //Sockets Chat
    socketChat(io);

    //Envío usuario:
    socketLoginUser(io);

}