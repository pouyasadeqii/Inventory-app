import React from "react";

const ProductList = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Product List</h2>
      <div className="flex items-center justify-between">
        <span className="text-slate-400">React.js</span>
        <div className="flex items-center gap-x-3">
          <span className="text-slate-400">date</span>
          <span className="block px-3 py-0.5 text-slate-400 border border-slate-500 rounded-2xl text-sm">
            frontend
          </span>
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
            10
          </span>
          <button className="border px-2 py-0.5 rounded-xl border-red-400 text-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
