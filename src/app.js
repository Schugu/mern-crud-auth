// Para importar en node.js utilizando import y no require se debe poner "type":"module" 
// en las propiedades package.json (Esto significa que se puedan ocupar los modulos de ES6).

// Importar express.
import express from 'express' 

// Importar morgan
import morgan from 'morgan'

// Inicializar express y almacenar el objeto que nos devuelve en la constante app.
const app = express();

// App utiliza el modulo morgan con su configuración dev. 
app.use(morgan('dev'));

export default app 



