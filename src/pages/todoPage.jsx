import TodoInput from "./../components/todoInput";
import TodoList from "../components/todoList";
import useStorageData from "../utilits/localStorage";
import Footer from "../components/footer";

const TodoPage = () => {
  const [todos, setTodos] = useStorageData("todos", []);
  const addTodos = function (value) {
    if (value) {
      setTodos([...todos, { id: new Date(), todoName: value, done: false }]);
    } else {
      alert("введите нормальное значение але!");
    }
  };

  const toogleTodo = function (todo) {
    const updatedTodos = todos.map((value) => {
      if (value.id === todo.id) {
        console.log(value);
        if (value.done === false) {
          value.done = true;
          console.log(value);
        } else {
          value.done = false;
          console.log(value);
        }
      }

      return value;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = function (todo) {
    const updatedTodos = todos.filter((value) => value.id !== todo.id);
    setTodos(updatedTodos);
  };

  const editTodo = function (todo, todoName) {
    const updatedTodos = todos.map((value) => {
      if (value.id === todo.id) {
        if (value.todoName === todoName) {
          return value;
        } else value.todoName = todoName;
      }
      return value;
    });
    setTodos(updatedTodos);
  };

  const deleteAllTodos = function () {
    setTodos([]);
  };

  return (
    <>
      <TodoInput addTodos={addTodos} />
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toogleTodo={toogleTodo}
          addTodos={addTodos}
          editTodo={editTodo}
        />
      ))}
      {todos.length > 0 && <Footer deleteAllTodos={deleteAllTodos} />}
    </>
  );
};

export default TodoPage;
