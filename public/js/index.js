export let socket = io.connect()

export const getTemplate = (fileName, callback) => {
    fetch('../templates/' + fileName)
    .then(archivo => archivo.text()) //Recibo el archivo y lo convierto a texto
    .then(template=>{callback(template)}) 
};

socket.on("userName", (user)=>{
    document.querySelector("#user-name").innerHTML=user;
})

