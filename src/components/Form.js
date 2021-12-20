import React, { useState } from "react";
import Todolist from "./Todolist.js";

export default function Form() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, { id: todos.length + 1, task: input, isEdit: false }]);

    setInput(" ");
  };

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editToggler(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isEdit = !todo.isEdit;
        }

        return todo;
      })
    );
  }

  function editList(id, update) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo.task);
          todo.task = update;
          console.log(todo.task);
          todo.isEdit = false;
        }
        return todo;
      })
    );
  }
  return (
    <>
      <form class="input-field" autocomplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          name="text"
          onChange={handleChange}
        ></input>
        <button class="btn green">+</button>
      </form>
      <Todolist
        todos={todos}
        deleteTask={deleteTask}
        editToggler={editToggler}
        editList={editList}
      />
    </>
  );
}
