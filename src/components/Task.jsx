// React
import React from "react";

// Styles
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div
      className="task_container"
      style={
        task.completed
          ? { borderLeft: "6px solid hsl(177, 70%, 41%)", transition: "1ms" }
          : {}
      }
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        <span>{task.title}</span>
      </div>

      <div className="buttons-container">
        {/* <button className="info-task-button">!</button> */}
        <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
