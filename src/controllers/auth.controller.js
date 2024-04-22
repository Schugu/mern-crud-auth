// Importar el modelo de usuario
import User from '../models/user.model.js'


// Funciones que nos permitan procesar peticiones.
export const register = async (req, res) => {
  // Extraer datos relevantes
  const { email, password, username } = req.body;

  try {
    // Crear un nuevo usuario
    const newUser = new User({
      username,
      password,
      email
    });

    // Guardar el usuario en la base de datos
    const userSaved = await newUser.save();

    // Devolver el dato correcto al FrontEnd
    res.json(userSaved);
    
  } catch (error) {
    console.log(error);
  }
}

  export const login = (req, res) => {
    // Responder un texto que diga: ''.
    res.send('login');
  }