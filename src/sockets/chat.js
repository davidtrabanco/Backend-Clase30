import {controller} from "./controller/index.js";

export const socketChat = async (io) =>{

    //NUEVA CONEXION
    io.on('connection', async (socket) =>{

        //Envío historial de chat
        socket.on('getChat', async ()=>{
            socket.emit('chatHistoric', await controller.getChat()) 
        })
        
        //llega nuevo mensaje
        socket.on('newMessage', obMessage=>{
            //Guardo en DB:
            controller.saveMessage(obMessage);
            //Envío a todas las conexiones:
            io.sockets.emit('newMessage', [obMessage])
        })
           
       });
    
}