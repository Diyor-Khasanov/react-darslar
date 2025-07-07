import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function App() {
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
  };

  const addProduct = async () => {
    if (name.trim() === "") return;
    await axios.post("http://localhost:5000/products", { name });
    setName("");
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>

      <input
        type="text"
        placeholder={t("add")}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addProduct}>{t("add")}</button>

      <h2>{t("productList")}</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteProduct(item.id)}>
              {t("delete")}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
