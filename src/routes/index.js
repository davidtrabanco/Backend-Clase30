import {Router} from "express";
import {loginCheck} from "./Middleware/login.js";
import {controller} from "./Controller/index.js";

//Declaro el router Productos:
export const router = Router();

//valido que el usuario esté registrado:
router.use( loginCheck )

//ruta para registrar usuario
router.post("/register", controller.registerLogin)

router.get("/register", controller.registerLogout)