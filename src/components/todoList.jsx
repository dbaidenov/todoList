import { useRef, useState } from "react";

const TodoList = ({ todo, deleteTodo, toogleTodo, editTodo }) => {
  const inputTodo = useRef(null);
  const confirmButton = useRef(null);
  const oldTodo = { ...todo };
  const oldTodoName = oldTodo.todoName;
  const [todoName, setTodoName] = useState(oldTodoName);

  const checkTodo = function () {
    if (todo.done === true) {
      return "todo-description todo-description--done";
    } else return "todo-description";
  };

  const checkTodoForDefaultChecked = function () {
    if (todo.done === false) {
      return false;
    } else return true;
  };

  const saveNewTodo = function (e) {
    if (e.key === "Enter") {
      if (
        todoName !== null &&
        todoName !== undefined &&
        todoName.trim() !== ""
      ) {
        editTodo(todo, todoName);
        inputTodo.current.blur();
        inputTodo.current.disabled = true;
        confirmButton.current.className = "button-confirm";
      } else {
        alert("введите значение или удалите текущий туду!");
      }
    }
  };

  const saveNewTodoOnClick = function () {
    if (todoName !== null && todoName !== undefined && todoName.trim() !== "") {
      editTodo(todo, todoName);
      inputTodo.current.blur();
      inputTodo.current.disabled = true;
      confirmButton.current.className = "button-confirm";
    } else {
      alert("введите значение или удалите текущий туду!");
    }
  };
  return (
    <div className="todoList">
      <div className="form-check">
        <input
          onChange={() => {
            toogleTodo(todo);
          }}
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          defaultChecked={checkTodoForDefaultChecked()}
        />
        <input
          onChange={(e) => setTodoName(e.target.value)}
          onKeyDown={saveNewTodo}
          ref={inputTodo}
          type="text"
          value={todoName}
          disabled={true}
          className={checkTodo()}
        />
      </div>
      <div className="useTodo">
        <button
          className="button-confirm"
          ref={confirmButton}
          onClick={saveNewTodoOnClick}
        >
          ✔
        </button>
        <button
          onClick={() => {
            confirmButton.current.className = "";
            inputTodo.current.disabled = false;
            inputTodo.current && inputTodo.current.focus();
          }}
        >
          ✎
        </button>

        <button
          onClick={() => {
            deleteTodo(todo);
          }}
        >
          ✘
        </button>
      </div>
    </div>
  );
};

export default TodoList;
