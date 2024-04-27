// Importar el react-hook-form
import { useForm } from "react-hook-form";

// Importar el auth.js
// import { registerRequest } from "../api/auth.js";

// Improtar el useAuth
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";

// Importar el useNavigate y Link
import { useNavigate, Link } from "react-router-dom";

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
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {
          registerErrors.map((error, i) => (
            <div key={i} className="bg-red-500 p-2 text-white my-2">
              {error}
            </div>
          ))
        }

        <h1 className="text-3xl font-bold my-2">Register</h1>
        <form onSubmit={onSubmit}>
          <input type="text" name="username" placeholder="Username" {...register('username', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {
            errors.username && (
              <p className="text-red-500">Username is requiere</p>
            )
          }

          <input type="email" name="email" placeholder="Email" {...register('email', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {
            errors.email && (
              <p className="text-red-500">Email is requiere</p>
            )
          }

          <input type="password" name="password" placeholder="Password" {...register('password', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {
            errors.password && (
              <p className="text-red-500">Password is requiere</p>
            )
          }

          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"
          >Register</button>
        </form>

        <p className="flex gap-x-2 justify-between">
          Already have an account? <Link to="/login" className="text-sky-500">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage