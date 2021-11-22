import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

function TodoDelete() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  // all 클릭시 모든 true >> false, false >> true
  const clickCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  // 삭제 클릭시 선택된 것 삭제
  const clickDeleteBtn = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodos);
    setCheckAll(false);
  };

  // check 제외한 할 일 개수
  const todosLength = todos.filter((todo) => todo.complete === false).length;

  return (
    <div className="row">
      <label htmlFor="all">
        <input
          type="checkbox"
          name="all"
          id="all"
          onChange={clickCheckAll}
          checked={checkAll}
        />
        All
      </label>
      <p>남은 할 일 : {todosLength}개</p>
      <button id="delete" onClick={clickDeleteBtn}>
        삭제
      </button>
    </div>
  );
}

export default TodoDelete;
