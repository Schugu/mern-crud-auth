// Importar el react-hook-form
import { useForm } from "react-hook-form";

import { useAuth } from "../context/AuthContext.jsx";

import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from "react";


function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signIn, errors: signInErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();


  const onSubmit = handleSubmit(data => {
    signIn(data);
  });

  useEffect(() => {
    if(isAuthenticated) navigate('/tasks');
  }, [isAuthenticated]);


  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        signInErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white my-2">
            {error}
          </div>
        ))
      }

      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={onSubmit}>
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

        <button type="submit">Login</button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
      </p>
    </div>
  )
}

export default LoginPage