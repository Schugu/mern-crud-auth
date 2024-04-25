// Importar el enrutador de express y ejecutarlo
import { Router } from "express";
const router = Router();

// Importar la función authRequire de validateToken.js
import { authRequire } from '../middlewares/validateToken.js'

// Importar funciones del tasks.controller.js
import {
  getTasks,
  getTask,
  createTasks,
  updateTasks,
  deleteTasks
} from '../controllers/tasks.controller.js'

// RUTAS
// Obtener
router.get('/tasks', authRequire, getTasks);

// Obtener uno solo
router.get('/tasks/:id', authRequire, getTask);

// Crear
router.post('/tasks', authRequire, createTasks);

// Actualizar uno solo 
router.put('/tasks/:id', authRequire, updateTasks);

// Eliminar uno solo
router.delete('/tasks/:id', authRequire, deleteTasks);



export default router;