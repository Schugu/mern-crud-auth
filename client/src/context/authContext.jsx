// Importar el componente createContext de react.
import { createContext, useState, useContext, useEffect } from "react";

// Importar el auth.js
import { registerRequest, loginRequest } from "../api/auth.js";

// Ejecutar el componente y almacenarlo en una const
export const AuthContext = createContext();

// Exportar hook del uso del contexto
export const useAuth = () => {
  // useContext lee nuestro contexto y nos arroja un nuevo contexto.
  const context = useContext(AuthContext);

  // Si no existe un contexto arrojar un mensaje de error.
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
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

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      // setIsAuthenticated(true);
    } catch (error) {
      // Si es un array devolverlo solamente
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      // Sino devolverlo como un array
      setErrors([error.response.data.message]);
    }
  }

  // Funcion para eliminar los mensajes de error despues de un tiempo.
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider value={{ signUp, signIn, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  )
}