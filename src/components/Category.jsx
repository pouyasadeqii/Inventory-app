import React, { useState } from "react";

const initialvalue = {
  title: "",
  description: "",
};

const Category = ({ setCategories }) => {
  const [show, setShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState(initialvalue);

  const changeHandler = (e) => {
    setCategoryFormData({
      ...categoryFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };

    // ba prevState lazem nist kole data category ro pas bdim be in component
    setCategories((prevState) => [...prevState, newCategory]);
    setCategoryFormData(initialvalue);
  };

  return (
    <section>
      <div className={`mb-6 ${show ? "" : "hidden"}`}>
        <h2 className="text-xl text-slate-300 font-bold">Add New Catrgory</h2>
        <form
          action="#"
          className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        >
          <div>
            <label
              className="block mb-1 text-slate-400"
              htmlFor="categoryTitle"
            >
              Title
            </label>
            <input
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              type="text"
              id="categoryTitle"
              name="title"
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              className="block mb-1 text-slate-400"
              htmlFor="categoryDescription"
            >
              Description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              type="text"
              id="categoryDescription"
              name="description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShow(false);
              }}
              className="flex-1 border border-slate-400 text-slate-400 py-2 rounded-xl"
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-slate-500 text-slate-200 py-2 rounded-xl"
              onClick={addNewCategoryHandler}
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-slate-600 text-lg mb-4 font-medium ${
          show && "hidden"
        }`}
        onClick={() => setShow(!show)}
      >
        Add New Category ?
      </button>
    </section>
  );
};

export default Category;
