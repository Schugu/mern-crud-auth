// Para importar en node.js utilizando import y no require se debe poner "type":"module" 
// en las propiedades package.json (Esto significa que se puedan ocupar los modulos de ES6).

// Importar express.
import express from 'express';

// Importar morgan
import morgan from 'morgan';

// Importar authRoutes
import authRoutes from './routes/auth.routes.js';

// Inicializar express y almacenar el objeto que nos devuelve en la constante app.
const app = express();

// App utiliza el modulo morgan con su configuración dev. 
app.use(morgan('dev'));

// Para transofrmar los req body en json o formato de javascript.
app.use(express.json()); 

// Que app utilice el authRoutes
app.use('/api', authRoutes);

export default app 



