import { useEffect, useState } from "react";
import axios from "axios";
import Vazifa from "./components/Vazifa";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  // Mahsulotlarni olish (Read)
  const fetchProducts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Qo'shish yoki yangilash (Create / Update)
  const handleSubmit = () => {
    if (inputValue.trim() === "") return;

    if (editId === null) {
      // Create
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: inputValue,
        })
        .then(() => {
          fetchProducts();
          setInputValue("");
        });
    } else {
      // Update
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${editId}`, {
          title: inputValue,
        })
        .then(() => {
          fetchProducts();
          setInputValue("");
          setEditId(null);
        });
    }
  };

  // Tahrirlashni boshlash
  const handleEdit = (id, title) => {
    setInputValue(title);
    setEditId(id);
  };

  // O'chirish (Delete)
  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => fetchProducts());
  };

  return (
    <div className="app">
      <h1>Mahsulotlar CRUD (React + Axios)</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Mahsulot nomi"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {editId === null ? "Qo'shish" : "Yangilash"}
        </button>
      </div>

      <Vazifa
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
