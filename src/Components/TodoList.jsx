import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Function to remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Todo List</h2>
      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Enter task..." 
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button onClick={addTask} style={{ marginLeft: "10px", padding: "8px" }}>
        Add Task
      </button>
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onRemove={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
