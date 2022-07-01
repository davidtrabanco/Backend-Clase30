import config from "../../../config.js";
import {usersDbDAO} from "../../DAOs/index.js";
import bcrypt from "bcrypt";
import {getRandom} from "./numRandom.js";

export const controller = {};

controller.showSignupForm = (req,res)=>{
    res.render('signup.ejs')
}

controller.signup = async (req,res)=>{
    const user = req.body

     //verifico que el usuario no exista
     const userFound = await usersDbDAO.getUserByEmail(user.email);
     if(userFound){
        req.flash( 'status', "El usuario ya existe")
         return res.redirect( '/signup')
     }

     //Encripto el password:
     const hashedPassword = bcrypt.hashSync( user.password, bcrypt.genSaltSync(10),null);
     user.password = hashedPassword;

     //Creo el usuario:
     await usersDbDAO.addDocument(user);

     //redirijo al Login
     res.redirect('/login')
}

controller.showLoginForm = (req,res)=>{
    res.render('login.ejs')
}

controller.login = (req,res)=>{
    res.redirect('/');
}

controller.logout = (req,res)=>{
    console.log(`The Session  was destroyed for: ${req.user[0].email}
    `);
    req.session.destroy();
    res.redirect('/login');
}

controller.randoms = async (req,res)=>{
    const qty = req.params.qty ? req.params.qty : 10e7;
    res.json(await getRandom(qty))
}

controller.info = (req, res) => {
    res.send(`INFORMACIÓN DEL PROCESO:
    <br>
    Fecha y Hora: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}
    <br>
    Argumentos de entrada: ${process.argv.slice(2)}
    <br>
    Plataforma: ${process.platform}
    <br>
    Versión de NodeJs: ${process.versions.node}
    <br>
    Memoria Reservada: ${process.memoryUsage.rss()}
    <br>
    Path de ejecución: ${process.execPath}
    <br>
    <b> Process ID: ${process.pid} </b>
    <br>
    <b> Cantidad de CPUs: ${config.numCPUs} </b>
    <br>
    Carpeta del proyecto: ${config.dirname}
    `)
 
}