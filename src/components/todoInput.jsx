import { useState } from "react";

const TodoInput = (props) => {
  const [value, setValue] = useState("");

  const addTodoList = function (e) {
    e.preventDefault();
    props.addTodos(value);
    setValue("");
  };

  const addTodoListOnEnter = function (e) {
    if (e.key === "Enter") {
      props.addTodos(value);
      setValue("");
    }
  };

  return (
    <>
      <div className="todoInput input-group-lg">
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={addTodoListOnEnter}
        />
        <button onClick={addTodoList}>➤</button>
      </div>
    </>
  );
};

export default TodoInput;
