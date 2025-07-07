import React from "react";

const ProductList = ({ products, handleEdit, handleDelete }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title}
          <button onClick={() => handleEdit(product.id, product.title)}>
            Tahrirlash
          </button>
          <button onClick={() => handleDelete(product.id)}>O'chirish</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
