import React from "react";

const TodoItem = ({ task, onRemove }) => {
  return (
    <li style={{ margin: "10px", fontSize: "18px" }}>
      {task}
      <button 
        onClick={onRemove} 
        style={{ marginLeft: "10px", padding: "5px" }}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
