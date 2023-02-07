import React from "react";

const Products = () => {
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
            name="productTitle"
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
            name="productQuantity"
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
            name="productCategory"
            id="productCategory"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            <option className="bg-slate-500 text-slate-300" value="backend">
              backend
            </option>
            <option className="bg-slate-500 text-slate-300" value="frontend">
              frontend
            </option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <button className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Products;
