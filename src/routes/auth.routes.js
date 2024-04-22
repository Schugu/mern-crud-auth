// Importar funcion Router de express.
import { Router } from "express"; 

// Importar las funciones de register y login de auth.controller.js.
import { register, login  } from '../controllers/auth.controller.js'

// Guardar objeto dado por Router en una const
const router = Router();

// Crear rutas
// Cuando se haga una peticion post a: "" , ejecutar la funcion: "". 
router.post('/register', register);
router.post('/login', login);

export default router;