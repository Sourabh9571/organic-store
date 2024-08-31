import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Slices/categorySlice/categorySlice";
import { addProduct } from "../../../Slices/adminItemsSlice/adminProductsSlice";

function Addproduct() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedimage, setselectedimage] = useState(null);

  const productnameref = useRef("");
  const productpriceref = useRef(null);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(e);
    if (file) {
      setselectedimage(file);
    }
  };

  const { loading, error, products } = useSelector((state) => ({
    loading: state.products.loading,
    error: state.products.error,
    products: state.products.products,
  }));
  console;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productnameref.current.value === "" ||
      selectedimage === null ||
      productpriceref.current.value === null ||
      selectedCategory === ""
    ) {
      productnameref.current.value = "";
      productpriceref.current.value = "";
      setSelectedCategory("");
      setselectedimage(null);
      alert("Please fill all the fields");
    } else {
      const formdata = new FormData();
      formdata.append("file", selectedimage);
      dispatch(
        addProduct({
          productname: productnameref.current.value,
          price: productpriceref.current.value,
          categoryid: selectedCategory,
          image: formdata,
          isSale: 0,
        })
      ).then(() => {
        // Reset form fields after successful submission
        productnameref.current.value = "";
        productpriceref.current.value = "";
        setSelectedCategory("");
        setselectedimage(null);
      });
    }
  };

  return (
    <div
      className="mx-10 md:ml-5 mt-10 md:mt-7 absolute top-10 "
      style={{ zIndex: "1" }}
    >
      <h1 className="text-xl ">Add Product</h1>
      <form>
        <div className="flex flex-col md:flex-row mt-7 md:mt-5 gap-5 md:gap-14">
          <input
            type="text"
            placeholder="product name"
            className="py-1 px-4 w-full md:w-64 h-10 border border-gray-600 outline-none rounded-sm"
            ref={productnameref}
          />
          <input
            type="number"
            placeholder="price"
            className="py-1 px-4 w-full md:w-64 h-10 border border-gray-600 outline-none rounded-sm "
            ref={productpriceref}
          />
        </div>
        <div className="flex flex-col md:flex-row mt-5 gap-5 md:gap-14">
          <input
            type="file"
            className="py-1 h-10 px-4 w-full md:w-64 border border-gray-600 "
            onChange={handleFileChange}
          />
          <select
            className=" border border-gray-700 h-10 w-full md:w-64 px-4 py-1 bg-slate-100 hover:bg-slate-300"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-5 mt-5 items-center">
          <button
            className="h-10 w-20 bg-green-200 border
         border-slate-500 rounded-lg hover:bg-green-300 hover:cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {loading && (
            <div className="">
              <div className="self-center loading ease-linear rounded-full border-8 border-t-8 border-black h-8 w-8"></div>
            </div>
          )}
        </div>
      </form>
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-md mt-5 mx-10">
          {error}
        </div>
      )}
      {!loading && !error && products === "Successfull" && (
        <div className="bg-blue-100 text-black p-4 rounded-md mt-5 mx-10">
          {"Submitted"}
        </div>
      )}
    </div>
  );
}

export default Addproduct;
