import {Strategy as LocalStrategy} from "passport-local";
import bcrypt from "bcrypt";
import {usersDbDAO} from "./src/DAOs/index.js";



export const initiliazePassport = (passport)=>{

    const authenticateUser = async (req, email, password, done) =>{

        //buscar el usuario
        const user = await usersDbDAO.getUserByEmail(email);

        //Si no encuentro el usuario:
        if(!user){ 
            req.flash( 'status', "Usuario no existe")
            return done( null, false, {message: 'User not found'})
        }

        //Si lo encuentro comparo los password:
        if( bcrypt.compareSync(password, user.password) ){
            //Si el password coincide devuelvo el usuario:
            console.log(`*** User: ${user.email} was successfully authenticated ***
            `);

            return done(null, user)

        }else{
            req.flash( 'status', "Contraseña incorrecta")
            return done(null, false, {message: 'Password Incorrect'})
        }
    }

    passport.use( "local", new LocalStrategy( { usernameField: 'email', passReqToCallback: true }, authenticateUser ))

    passport.serializeUser( (user, done)=>{ done(null, user._id)})
    passport.deserializeUser( async (id, done) =>{ 
        const user = await usersDbDAO.getDocuments('_id', id)
        done( null, user);
    })

}



