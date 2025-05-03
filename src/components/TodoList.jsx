import React from "react";

function TodoList({ index, item, deleteTodo, updateTodoStatus }) {
  // const [status, setStatus] = false;
  const [edit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, label: e.target.value });
  };

  return (
    <div>
      <li className="list-item">
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => updateTodoStatus(index)}
        />
        {item.label}
        {/* {item._status} */}
        <button onClick={() => setEdit(true)}>Edit</button>
        <span className="icons">
          <i
            className="fa-solid fa-trash-can icon-delete"
            onClick={() => deleteTodo(index)}
          ></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
