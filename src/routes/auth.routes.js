// Importar funcion Router de express.
import { Router } from "express";

// Importar las funciones de auth.controller.js.
import { register, login, logout, profile } from '../controllers/auth.controller.js';

// Importar el authRequiere de validateToken.js
import { authRequire } from "../middlewares/validateToken.js";

// Guardar objeto dado por Router en una const
const router = Router();

// Crear rutas
// Cuando se haga una peticion post a: "" , ejecutar la funcion: "". 
router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

router.get('/profile', authRequire, profile);

export default router;