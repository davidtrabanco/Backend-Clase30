import {fork} from "child_process";

export const getRandom = (qty) =>{
    return new Promise((resolve,reject)=>{
        //inicio el proceso child
        const subProcess = fork("randomSubProcess.js")
        //envio el parametro
        subProcess.send(qty);
        //recibo un mensaje, el primero será el ready
        subProcess.on("message", msg =>{
            //recibo el objeto con los random
            resolve(msg);
        })
    })

}