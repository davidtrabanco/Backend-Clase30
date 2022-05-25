import config from "../../config.js";

export const socketLoginUser = async (io) =>{
    io.on('connection', async (socket) =>{
        socket.emit('userName', config.login.user) 
    })

}