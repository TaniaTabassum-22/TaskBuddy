import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">Task Buddy&#x1F3AF;</h1>
        <p className="tagline">Your Personal Productivity Partner&#x1F91D;</p>
      </header>

      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>

      {tasks.length > 0 && (<button onClick={clearTasks} className="clear-btn">Clear all tasks</button>)}

      <footer>
        <p>© 2025 Task Buddy. &#x1F4CB;Plan. &#x1F4DD;Track. &#x2705;Achieve. &#x1F680;</p>
      </footer>

    </div>
  )
}
