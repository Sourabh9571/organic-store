import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Slices/categorySlice/categorySlice.js";
import style from "./Shop.module.css";

function Shop() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { loading, error, categories } = useSelector((state) => state.category);

  return (
    <>
      <div className={` ${style.box}`}>
        <div className="flex pt-16">
          <div
            className={`${style.left} border-r-2 border-gray-400 px-5 pr-10`}
          >
            <input
              type="text"
              placeholder="Search products..."
              className="py-2 px-5  border border-gray-00"
            />
            <h1 className="mt-10">Filter By Price</h1>
            <div className="ml-2 mt-16">
              {categories.map((item) => (
                <h2 className="text-green-700">{item.category}</h2>
              ))}
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </>
  );
}

export default Shop;
