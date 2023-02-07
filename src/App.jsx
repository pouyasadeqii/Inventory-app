import React from "react";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category />
      </div>
      <div className="container max-w-screen-sm mx-auto p-4">
        <Products />
      </div>
    </div>
  );
};

export default App;
