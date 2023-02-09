import React from "react";

const ProductList = ({ products, categories, setProducts }) => {
  const findCategory = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };

  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== parseInt(productId)
    );
    console.log(filteredProducts);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Product List</h2>

      <div className="overflow-x-scroll sm:overflow-x-visible">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between mb-3"
            >
              <span className="text-slate-400">{product.title}</span>
              <div className="flex items-center gap-x-1">
                <span className="text-slate-400">
                  {new Date(product.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 border border-slate-500 rounded-2xl text-sm">
                  {findCategory(product.categoryId)}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                  {product.quantity}
                </span>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="border px-2 py-0.5 rounded-xl border-red-400 text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
