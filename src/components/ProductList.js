import React, { useState } from "react";
import { products } from "../mockAPI";
import "../styles/ProductList.css";

const ProductList = ({ onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStore, setFilterStore] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      filterStore ? product.store === filterStore : true
    );

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setFilterStore(e.target.value)}>
        <option value="">All Stores</option>
        <option value="Store A">Store A</option>
        <option value="Store B">Store B</option>
      </select>
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
          <p>{product.name} - {product.store} - ${product.price}</p>
          <button onClick={() => onEdit(product)}>Edit</button>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;