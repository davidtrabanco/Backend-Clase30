import config from "../../config.js";

export const socketLogedUser = async (io) =>{
    io.on('connection', async (socket) =>{
        socket.emit('userLoged', config.login.user) 
    })

}