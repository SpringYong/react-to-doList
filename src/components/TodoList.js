import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [todos, setTodos] = useContext(DataContext);
  console.log(todos);

  // check 클릭시 true >> false, false >> true
  const toggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  // 수정값(editValue) setTodos에 저장하기
  const editTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={toggleComplete}
          editTodos={editTodos}
        />
      ))}
    </ul>
  );
}

export default TodoList;
