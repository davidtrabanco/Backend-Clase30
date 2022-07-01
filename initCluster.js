import cluster from "cluster";
import config from "./config.js";

export const startServer = async ( MODE, PORT, server)=>{

    switch (MODE.toUpperCase()) {

        case 'FORK':
            console.log(`*** FORK MODE ***`);
            //Inicio Servidor:
            const activeServer = server.listen(PORT, ()=>console.log(`HTTP Server Up on Port ${activeServer.address().port}`))
            activeServer.on('error', err => console.error(err));

            break;

        case 'CLUSTER':
            //CLUSTER:
        
            //const cluster = await import('cluster');

            if(cluster.isPrimary){
                console.log(`*** STARTING IN CLUSTER MODE ***`);

                //SI SOY EL PRIMARY:
                console.log(`CPUs QTY: ${config.numCPUs}`);
                console.log(`PID MASTER ${process.pid}`);

                //Creo un Worker por CPU:
                for (let index = 0; index < config.numCPUs; index++) {
                    cluster.fork()
                }

                cluster.on("exit", worker =>{
                    console.log(`XXX Worker PID: ${worker.process.pid} DIED. Creating new Worker:`);
                    cluster.fork();//cuando termina un worker inicio otro
                })

            }else{
                //SOY WORKER:
                
                //Inicio Servidor:
                const activeServer = server.listen(PORT, ()=>console.log(`HTTP Server Up on Port ${activeServer.address().port} running on PID: ${process.pid}`))
                activeServer.on('error', err => console.error(err));

            }

        break;
    

    }


}