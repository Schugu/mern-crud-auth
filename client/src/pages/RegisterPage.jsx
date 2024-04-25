// Importar el react-hook-form
import { useForm } from "react-hook-form";

// Importar el auth.js
import { registerRequest } from "../api/auth.js";

// Improtar el useAuth
import { useAuth } from "../context/authContext.jsx";
import { useEffect } from "react";

// Importar el useNavigate
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  // Registger Sirve para darle requisitos a los inptus
  // handleSubmit Sirve para manejar el submit
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Importar la funcion register del useAuth.
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();

  // Importar la navegación
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated])

  // Guardar la logica en una const 
  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        registerErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white">
            {error}
          </div>
        ))
      } 

      <form onSubmit={onSubmit}>

        <input type="text" name="username" {...register('username', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {
          errors.username && (
            <p className="text-red-500">Username is requiere</p>
          )
        }

        <input type="email" name="email" {...register('email', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {
          errors.email && (
            <p className="text-red-500">Email is requiere</p>
          )
        }

        <input type="password" name="password" {...register('password', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {
          errors.password && (
            <p className="text-red-500">Password is requiere</p>
          )
        }



        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage