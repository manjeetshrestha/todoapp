import React, { useState } from "react";

function Edit({ isEdit, editList, id }) {
  const [update, setUpdate] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    setUpdate(e.target.value);
  };

  if (isEdit === true) {
    return (
      <form
        onSubmit={() => {
          editList(id, update);
        }}
      >
        <input onChange={handleEdit} value={update}></input>
        <button class="btn edit">+</button>
      </form>
    );
  } else {
    return <></>;
  }
}

export default function Todolist({ todos, deleteTask, editToggler, editList }) {
  const todoitems = todos.map((todo) => {
    return (
      <div class="todo-list">
        <span>{todo.task}</span>
        <div class="buttons">
          <button onClick={() => deleteTask(todo.id)} className="btn red">
            X
          </button>
          <button onClick={() => editToggler(todo.id)} className="btn edit">
            E
          </button>

          <Edit isEdit={todo.isEdit} editList={editList} id={todo.id} />
        </div>
      </div>
    );
  });

  return <>{todoitems}</>;
}
