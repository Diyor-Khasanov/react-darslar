function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <small>{product.category}</small>
    </div>
  );
}

export default ProductCard;
