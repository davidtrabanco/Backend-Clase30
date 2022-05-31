export let socket = io.connect()

export const getTemplate = (fileName, callback) => {
    fetch('../templates/' + fileName)
    .then(archivo => archivo.text()) //Recibo el archivo y lo convierto a texto
    .then(template=>{callback(template)}) 
};

socket.on("userLoged", (user)=>{
    document.querySelector("#user-name").innerHTML = user.name;
    document.getElementById('msj.email').value = user.email;
    document.getElementById('msj.name').value = user.name;
    document.getElementById('msj.lastname').value = user.lastname;
    document.getElementById('msj.age').value = user.age;
    document.getElementById('msj.nickname').value = user.nickname;
    document.getElementById('msj.avatar').value = user.avatar;
})

