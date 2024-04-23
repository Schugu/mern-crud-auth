// Importar el modelo de usuario
import User from '../models/user.model.js'

// Importar el modulo bcryptjs
import bcrypt from 'bcryptjs'

// Importar la funcion createAccessToken de jwt.js
import { createAccessToken } from '../libs/jwt.js'

// Funciones que nos permitan procesar peticiones.
export const register = async (req, res) => {
  // Extraer datos relevantes
  const { email, password, username } = req.body;

  try {
    // Metodo de bcrypt que transforma un string en una serie de caracteres aleatorios. 
    // Esto va a encriptar la contraseña. El 10 indica cuantas veces se va a ejecutar el algoritmo. 
    const passwordHash = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = new User({
      username,
      email,
      password: passwordHash
    });

    // Guardar el usuario en la base de datos
    const userSaved = await newUser.save();

    // Crear y guardar el token en una const 
    const token = await createAccessToken({ id: userSaved._id });

    // Metodo de express para establecer una cookie
    res.cookie('token', token);

    // Devolver el dato correcto al FrontEnd
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const login = (req, res) => {
  // Responder un texto que diga: ''.
  res.send('login');
}