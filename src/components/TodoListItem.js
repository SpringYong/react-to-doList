import React, { useState } from "react";

function TodoListItem({ todo, id, checkComplete, editTodos }) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  // 수정 클릭시 내용 수정
  const todoEdit = () => {
    setEdit(true);
  };

  // 저장 클릭시 다시 리스트 목록 보여줌
  const saveTodo = (id) => {
    setEdit(false);
    if (editValue) {
      editTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  if (edit) {
    // 내용 수정하기
    return (
      <li>
        <input
          type="text"
          id="editValue"
          name="editValue"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button
          className="saveBtn"
          onClick={() => {
            saveTodo(id);
          }}
        >
          저장
        </button>
      </li>
    );
  } else {
    // 리스트 목록
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <button
          className="editBtn"
          disabled={todo.complete ? "disabled" : ""}
          onClick={todoEdit}
        >
          수정
        </button>
      </li>
    );
  }
}

export default TodoListItem;
