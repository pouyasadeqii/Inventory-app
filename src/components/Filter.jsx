import React, { useState } from "react";

const Filter = ({
  searchValue,
  onSearch,
  onSort,
  sort,
  categories,
  selectedCategory,
  onSelectedCategory,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="searchProducts" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          type="text"
          name="searchProducts"
          id="searchProducts"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          value={searchValue}
          onChange={onSearch}
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sortProducts" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          name="sortProducts"
          id="sortProducts"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>

      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sortCategories" className="text-slate-500 text-lg">
          Categories
        </label>
        <select
          name="sortCategories"
          id="sortCategories"
          className="bg-transparent text-slate-400 rounded-xl"
          value={selectedCategory}
          onChange={onSelectedCategory}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          {categories &&
            categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
