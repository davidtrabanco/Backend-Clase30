import config from "../../../config.js";

export const loginCheck = (req, res, next) =>{

    //si estoy recibiendo un registro continuo el proceso sin validar:
    if(req.url == "/register") next();

    //Si existe una cookie
    if( req.session.login ){

        //Valido que sea de registro:
        if(req.session.login.logged){
            console.log(`
            Nuevo acceso a url:${req.url}
            Usuario: ${req.session.login.user}`);

            //guardo el nombre de usuario:
            config.login.user = req.session.login.user;

            next() //continuo el enrutamiento (index.html)
        }
        else //si la cookie es erronea:
        {
            req.session.destroy();
            res.sendFile( config.dirname + "/public/login.html");
        }

    }else{

        console.log(`Acceso BLOQUEADO desde ${req.hostname} a url:${req.url}`);

        //Envío la página de registro:
        res.sendFile( config.dirname + "/public/login.html")

    }

}