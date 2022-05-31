import passport from "passport";

export const authLogin = passport.authenticate('local', {
    failureRedirect: '/login',
    failWithError:true,
    failureFlash: true,
    failureMessage: true,
    
})

