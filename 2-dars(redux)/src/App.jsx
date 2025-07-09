import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./features/todos/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  const handleEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h1>📝 Todo CRUD (Redux Toolkit)</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 10 }}>
            {todo.text}
            <button onClick={() => handleEdit(todo)} style={{ marginLeft: 10 }}>
              ✏️ Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: 5 }}
            >
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
