import { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { Task } from "./interfaces/Task";
import Logo from "./logo.svg";
interface Props {
  title: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "React", description: "Learn React", completed: false },
  ]);

  const getCurrentTime = (): number => new Date().getTime();

  const newAddTask = (task: Task) =>
    setTasks([...tasks, { ...task, id: getCurrentTime() }]);

  const deleteTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTask={newAddTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
