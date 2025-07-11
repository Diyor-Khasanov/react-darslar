import { useState } from "react";
import { useGetProductsQuery } from "../features/productsApi";
import ProductCard from "../components/ProductCard";

function Products() {
  const { data: products = [], isLoading } = useGetProductsQuery();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [visible, setVisible] = useState(6);

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category === "all" ? true : p.category === category))
    .slice(0, visible);

  const uniqueCategories = ["all", ...new Set(products.map((p) => p.category))];

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {uniqueCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {visible < products.length && (
        <button onClick={() => setVisible((prev) => prev + 6)}>See More</button>
      )}
    </div>
  );
}

export default Products;
