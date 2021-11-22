import React, { useRef, useState } from "react";
import { useContext, useEffect } from "react/cjs/react.development";
import { DataContext } from "./DataProvider";

function TodoInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  // 등록시 todo list에 추가
  const addTodo = (e) => {
    e.preventDefault(); // 새로고침 방지
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };

  // 할 일 입력창 focus
  useEffect(() => {
    todoInput.current.focus();
  });

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="오늘 해야 할 일"
        value={todoName}
        ref={todoInput}
        onChange={(e) => setTodoName(e.target.value)} // input에 입력한 값
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInput;
