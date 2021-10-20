import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

interface Props {
  newAddTask: (task: Task) => void;
}
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

const TaskForm = ({ newAddTask }: Props) => {
  const [task, setTask] = useState(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);
  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newAddTask(task);
    setTask(initialState);
    inputTitle.current?.focus();
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Añadir Tarea</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          name="title"
          placeholder="Ingrese Un Titulo"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Ingrese una descripción"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Agregar
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
