import React, { useState } from "react";

const initialValue = {
  title: "",
  quantity: "",
  categoryId: "",
};

const Products = ({ categories, setProducts }) => {
  const [productFormData, setProductFormData] = useState(initialValue);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductFormData({ ...productFormData, [name]: value });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductFormData(initialValue);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form
        action="#"
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <div>
          <label htmlFor="productTitle" className="block mb-1 text-slate-400">
            Title
          </label>
          <input
            type="text"
            className="bg-transparent p-2 rounded-xl border border-slate-500 text-slate-400"
            id="productTitle"
            name="title"
            value={productFormData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="productQuantity"
            className="block mb-1 text-slate-400"
          >
            Quantity
          </label>
          <input
            type="number"
            className="bg-transparent p-2 rounded-xl border border-slate-500 text-slate-400"
            id="productQuantity"
            name="quantity"
            value={productFormData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="productCategory"
            className="block mb-1 text-slate-400"
          >
            Category
          </label>
          <select
            className="bg-transparent border border-slate-500 w-full rounded-xl text-slate-300  p-2"
            name="categoryId"
            id="productCategory"
            value={productFormData.categoryId}
            onChange={changeHandler}
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            {categories &&
              categories.map((category) => (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              ))}
          </select>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <button
            onClick={addNewProductHandler}
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Products;
