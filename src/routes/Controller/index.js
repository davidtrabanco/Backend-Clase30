import config from "../../../config.js";

export const controller = {};

controller.registerLogin = (req,res)=>{

    const user = req.body.user;

    //Valido si se ingresó un usuario
    if ( user ){

        //creo la cookie:
        req.session.login = {
            user : user,
            logged : true,
        }

        //guardo el usuario en la configuración:
        config.login.user = user;

        console.log(`Se registró el usuario ${user}`);
        res.redirect('/');
    }
}

controller.registerLogout = (req,res)=>{
        console.log(`Se eliminó la Session`);
        req.session.destroy();
        res.redirect('/');
}