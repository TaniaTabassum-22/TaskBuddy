import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return (
    <div>
      <h1>Task Buddy&#x1F3AF;</h1>
      <p>Your Personal Productivity Partner&#x1F91D;</p>

      <TaskForm addTask = {addTask}/>
      <TaskList />
      <ProgressTracker />

      <button>Clear all tasks</button>

      <footer>
        <p>© 2025 Task Buddy. &#x1F4CB;Plan. &#x1F4DD;Track. &#x2705;Achieve. &#x1F680;</p>
      </footer>

    </div>
  )
}
