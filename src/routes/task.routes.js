// Importar el enrutador de express y ejecutarlo
import { Router } from "express";
const router = Router();

// Importar la función authRequire de validateToken.js
import { authRequire } from '../middlewares/validateToken.js'

router.get('/tasks', authRequire, (req, res) => {
  res.send('tasks')
})

export default router;