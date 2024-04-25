// Importar el react-hook-form
import { useForm } from "react-hook-form";

// Importar el auth.js
import { registerRequest } from "../api/auth.js";

function RegisterPage() {

  // Registger Sirve para darle requisitos a los inptus
  // handleSubmit Sirve para manejar el submit
  const { register, handleSubmit } = useForm();

  // Guardar la logica en una const 
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>

        <input type="text" name="username" {...register('username', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input type="email" name="email" {...register('email', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input type="password" name="password" {...register('password', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage