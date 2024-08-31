import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Slices/adminItemsSlice/adminProductsSlice";
import Item from "../../AdminItem/Item";

function Removeproductfromselling() {
  const about = "Remove from Selling Product";
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [myproducts, setMyProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Dispatching getProducts action...");
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    const arr = [];
    for (
      let i = currentIndex;
      i < products.length && i < currentIndex + 5;
      i++
    ) {
      arr.push(products[i]); // Access elements directly by index
    }
    setMyProducts(arr);
  }, [products, currentIndex]);

  const preHandle = () => {
    setCurrentIndex(currentIndex - 5 < 0 ? 0 : currentIndex - 5);
  };

  const nextHandle = () => {
    setCurrentIndex(
      currentIndex + 5 > products.length ? currentIndex : currentIndex + 5
    );
  };

  return (
    <>
      <div className="absolute w-full top-14 left-0" style={{ zIndex: "1" }}>
        {loading && (
          <div className="">
            <div className="self-center loading ease-linear rounded-full border-8 border-t-8 border-black h-10 w-10"></div>
          </div>
        )}
        {!loading && error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-md mt-5 mx-10">
            {error}
          </div>
        )}
        {!loading && !error && (
          <div className="p-5">
            <table className="border border-gray-400 rounded-sm w-full">
              <thead>
                <tr className="border border-gray-400">
                  <th className="border border-gray-400">Product Name</th>
                  <th className="border border-gray-400">Price</th>
                  <th className="border border-gray-400">Category</th>
                  <th className="border border-gray-400">About Sale</th>
                  <th className="border border-gray-400">Action </th>
                </tr>
              </thead>
              <tbody>
                {myproducts.map((product) =>
                  product.issale ? (
                    <Item key={product.id} product={product} about={about} />
                  ) : (
                    ""
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex justify-between mx-5">
          <button
            className="py-2 px-5 bg-green-400 hover:bg-green-600 hover:text-slate-200 rounded-lg"
            onClick={preHandle}
            disabled={currentIndex === 0}
          >
            Pre
          </button>
          <button
            className="py-2 px-5 bg-green-400 hover:bg-green-600 hover:text-slate-200 rounded-lg"
            onClick={nextHandle}
            disabled={currentIndex + 5 >= products.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Removeproductfromselling;
