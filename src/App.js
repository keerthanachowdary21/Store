import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import InvoiceDetail from "./components/InvoiceDetail";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loggedInStore, setLoggedInStore] = useState(null);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={setLoggedInStore} />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route
          path="/products"
          element={
            <ProductList
              products={products}
              onDelete={handleDeleteProduct}
              onEdit={handleEditProduct}
            />
          }
        />
        <Route
          path="/product-form"
          element={<ProductForm onSubmit={handleEditProduct} />}
        />
      </Routes>
    </Router>
  );
};

export default App;