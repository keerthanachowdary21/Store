import React, { useState } from "react";
import "../styles/ProductForm.css";

const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState(
    product || { name: "", store: "", price: 0 }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        name="store"
        value={formData.store}
        onChange={handleChange}
        placeholder="Store"
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;