// React
import React, { useState } from "react";

// Components
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// Externals Packages
import { v4 as uuidv4 } from "uuid";

// Styles
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  // Add BorderColor
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  // Add New Task
  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  // Delete Task
  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTasks(newTask);
  };

  return (
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </div>
  );
};

export default App;
