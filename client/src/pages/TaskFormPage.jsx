import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
// El useParams sirve para que podamos obtener un objeto con los datos dinamicos que van en la URL.
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task); // borrar desp
        setValue('title', task.title);
        setValue('description', task.description);
      }
    }
    loadTask();
  }, []);


  const onSubmit = handleSubmit((data) => {
    // Modo edición
    if (params.id) {
      updateTask(params.id, data);
    } else {
      // Modo creación
      createTask(data);
    }
    navigate('/tasks');
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register('title')}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <textarea
          rows="3"
          placeholder="Description"
          {...register('description')}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Save</button>
      </form>





    </div>
  )
}

export default TaskFormPage