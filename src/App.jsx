import { act, useEffect, useMemo, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const TODO_STATUS = {
  ALL: "all",
  COMPLETED: "completed",
  ACTIVE: "active",
};

function App() {
  const [todos, setTodos] = useState([]);
  const [activeStatus, setActiveStatus] = useState(TODO_STATUS.ALL);

  const addTodo = (label) => {
    if (label !== "") {
      setTodos([
        ...todos,
        { id: Math.random(), label, _status: TODO_STATUS.ACTIVE },
      ]);
    }
  };

  const deleteTodo = (id) => {
    setTodos((p) => {
      const newTodoList = [...p];
      newTodoList.splice(id, 1);

      return newTodoList;
    });
  };

  const updateTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      let currentStatus = todo._status;
      if (todo.id === id)
        todo._status =
          currentStatus === TODO_STATUS.ACTIVE
            ? TODO_STATUS.COMPLETED
            : TODO_STATUS.ACTIVE;
      return todo;
    });
    setTodos([...updatedTodos]);
  };

  const filterTodoList = (filterStatusName) => {
    setActiveStatus(filterStatusName);
  };

  const filteredTodoList = useMemo(() => {
    return activeStatus === TODO_STATUS.ALL
      ? todos
      : todos.filter((e) => {
          return e._status === activeStatus;
        });
  }, [todos, activeStatus]);

  return (
    <div className="todo-container">
      <TodoInput addTodo={addTodo} />
      <button
        data-active={activeStatus === TODO_STATUS.ALL}
        onClick={() => filterTodoList(TODO_STATUS.ALL)}
      >
        All
      </button>
      <button
        data-active={activeStatus === TODO_STATUS.ACTIVE}
        onClick={() => filterTodoList(TODO_STATUS.ACTIVE)}
      >
        Active
      </button>
      <button
        data-active={activeStatus === TODO_STATUS.COMPLETED}
        onClick={() => filterTodoList(TODO_STATUS.COMPLETED)}
      >
        Completed
      </button>

      {filteredTodoList.map((todoItem) => (
        <TodoList
          key={todoItem.id}
          index={todoItem.id}
          item={todoItem}
          deleteTodo={deleteTodo}
          updateTodoStatus={updateTodoStatus}
        />
      ))}
      <button>Update</button>
    </div>
  );
}

export default App;
