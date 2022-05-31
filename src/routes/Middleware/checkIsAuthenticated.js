import config from "../../../config.js";

export const isAuthenticated = ( redirectTrue, redirectFalse) => {

        return (req,res,next) => {

            if( req.isAuthenticated() ){ //si estoy autenticado:

                console.log( `Access authorized for user: ${req.user[0].email}
                `);

                config.login.user = req.user[0];

                if( redirectTrue == 'next' ){
                    return next();
                }else{
                    return res.redirect(redirectTrue)
                }

            }else{ //si NO estoy autenticado:

                console.log(`Access Denied to URL: ${req.url}`);

                if( redirectFalse == 'next' ){
                    return next();
                }else{
                    return res.redirect(redirectFalse)
                }
            }

        }
      
}


// res.writeHead(302 , {
//     'Location' : '/login' // This is your url which you want
//  });
// res.end();