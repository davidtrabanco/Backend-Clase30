import {controller} from "./controller/index.js";

export const socketProducts = async (io) =>{

    //NUEVA CONEXION
    io.on('connection', async (socket) =>{

        //Envío Productos
        socket.on('getProducts', async ()=>{
            socket.emit('products', await controller.getAllProducts()) 
        })
        
        //Recibo producto nuevo:
        socket.on('newProduct', product=>{

            controller.addProduct(product);//guardo el producto
            io.sockets.emit('products', controller.getAllProducts()) //Envío la lista actualizada a todas las conexiones
        
        })

    })
    
}