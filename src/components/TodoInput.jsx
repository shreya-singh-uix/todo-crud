import React, { useState } from "react";

function TodoInput({ addTodo }) {
  let [label, setLabel] = useState("");

  return (
    <div>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter your task"
        value={label}
        onChange={(e) => {
          setLabel(e.target.value);
        }}
      />
      <button
        className="addTodo-btn"
        onClick={() => {
          addTodo(label);
          setLabel("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default TodoInput;
