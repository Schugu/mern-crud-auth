// Para importar en node.js utilizando import y no require se debe poner "type":"module" 
// en las propiedades package.json (Esto significa que se puedan ocupar los modulos de ES6).

// Importar express.
import express from 'express'

// Inicializar express y almacenar el objeto que nos devuelve en la constante app.
const app = express();

// App = Servidor 
app.listen(3000);
console.log('Server on port', 3000);










// Carpetas
//  Src 
//    Routes : Nos servirá para crear las URL del BackEnd (definicion de endpoints o rutas
//             que el FrontEnd pueda pedir).
//    Controllers : Aquí se almacenarán las funciones que se van a ejecutar cuando visitemos
//                  una URL.
//    Models : Nos vaa a servir para guardar los modelos de datos de nuestra base de datos, 
//             Aquí vamos a estar creando esquemas.  
//    Middlewares : Nos va a servir para proteger rutas, para usuarios autentificados.  
//    Schemas : Nos va a serivr para validar datos.
//    Libs : Nos va a servir para escribir codigo que podamos importar varias veces.

// Archivos
//    app.js : Configuracion del código de express del BackEnd.
//    db.js : Base de datos
//    config.js : Nos va a servir para crear configuraciones que el resto de archivos va a pdoer importar.
//    index.js : Aplicacion de arranque.