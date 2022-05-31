import {socketProducts} from "./products.js";
import {socketChat} from "./chat.js";
import {socketLogedUser} from "./User.js";

export const initWebSocket = (io) =>{

    //sockets Productos
    socketProducts(io);

    //Sockets Chat
    socketChat(io);

    //Envío usuario:
    socketLogedUser(io);
}

