import React, { useEffect, useState } from "react";
import Category from "./components/Category";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Products from "./components/Products";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  document.addEventListener("keydown", (e) => {
    const firstWay = e.ctrlKey && e.key === "u";
    const secondWay = e.ctrlKey && e.shiftKey && e.key === "I";
    const thirdWay = e.key === "F12";

    return (firstWay || secondWay || thirdWay) && e.preventDefault();
  });

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterSearchTitle = (array) => {
    return array.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  };

  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  const sortDate = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createAt) > new Date(b.createAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createAt) > new Date(b.createAt) ? 1 : -1;
      }
    });
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar products={products} />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category categories={categories} setCategories={setCategories} />
        <Products categories={categories} setProducts={setProducts} />
        <Filter
          categories={categories}
          sort={sort}
          onSort={sortHandler}
          searchValue={searchValue}
          onSearch={searchHandler}
          selectedCategory={selectedCategory}
          onSelectedCategory={selectCategoryHandler}
        />
        <ProductList
          products={filteredProducts}
          setProducts={setProducts}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default App;
