// Importar el componente createContext de react.
import { createContext, useState, useContext } from "react";

// Importar el auth.js
import { registerRequest } from "../api/auth.js";

// Ejecutar el componente y almacenarlo en una const
export const AuthContext = createContext();

// Exportar hook del uso del contexto
export const useAuth = ()=> {
  // useContext lee nuestro contexto y nos arroja un nuevo contexto.
  const context = useContext(AuthContext);

  // Si no existe un contexto arrojar un mensaje de error.
  if(!context) {
    throw new Error ('useAuth must be used within an AuthProvider');
  }

  // Si existe un contexto, devolverlo. 
  return context; 
}

// Crear el provider que es basicamente un componente que engloba a otros.
export const AuthProvider = ({ children }) => {
  // Crear un estado
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Guardar el error en un estado para mostrarlo en pantalla
  const [errors, setErrors] = useState([]);

  const signUp = async (user) => {
    
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  }
  return (
    <AuthContext.Provider value={{ signUp, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  )
}