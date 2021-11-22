import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  // todo list 추가하기 위한 빈 배열
  const [todos, setTodos] = useState([]);

  // localStorage에서 가져오기
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) setTodos(todoList);
  }, []);

  // localStorage에 저장
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
