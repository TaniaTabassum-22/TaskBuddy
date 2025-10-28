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
    <>
      <div className="App">
        <header>
          <h1 className="title">Task Buddy🎯</h1>
          <p className="tagline">Your Personal Productivity Partner🤝</p>
        </header>

        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <ProgressTracker tasks={tasks} />

        {/* Clear button inside a container aligned left */}
        {tasks.length > 0 && (
          <div className="clear-btn-container">
            <button onClick={clearTasks} className="clear-btn">
              Clear all Tasks
            </button>
          </div>
        )}
      </div>

      {/* Footer outside of .App container */}
      <footer>
        © 2025 Task Buddy || 📋 Plan. 📊 Track. ✅ Achieve. 🚀
      </footer>
    </>
  );
}
