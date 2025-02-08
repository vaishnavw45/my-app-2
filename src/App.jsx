import React from "react";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo List with Props</h1>
      <TodoList />
    </div>
  );
};

export default App;
