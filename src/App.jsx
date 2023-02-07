import React, { useState } from "react";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Products from "./components/Products";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category categories={categories} setCategories={setCategories} />
      </div>
      <div className="container max-w-screen-sm mx-auto p-4">
        <Products categories={categories} setProducts={setProducts} />
      </div>
      <div className="container max-w-screen-sm mx-auto p-4">
        <ProductList products={products} setProducts={setProducts} categories={categories}/>
      </div>
    </div>
  );
};

export default App;
