import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../../Slices/trendingSlice/trendingSlice";
import {
  addinSellingProducts,
  removeFromSellingProducts,
} from "../../Slices/sellingproductslice/sellingProductSlice";
import {
  addInBestSellingProducts,
  removeFromBestSellingProducts,
} from "../../Slices/bestsellingslice/bestsellingslice";
import { getCategories } from "../../Slices/categorySlice/categorySlice";
import { updateProduct } from "../../Slices/adminItemsSlice/adminProductsSlice";
console;
function Item({ product, about }) {
  const [isAdded, setIsAdded] = useState(false);
  const [istrendingclick, setistrendingclick] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const [newPrice, setNewPrice] = useState("");
  const priceInputRef = useRef(null);

  const dispatch = useDispatch();
  const { loading, trendingproducts, error } = useSelector(
    (state) => state.trendingproducts
  );

  const handleonremovetrendingclick = () => {
    dispatch(removeProduct(product.id));
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleonaddsellingclick = async () => {
    setShowInputBox(true);
    // Wait for a brief moment to ensure the input box is rendered
    await delay(5000);

    // Focus the input box if it exists
    if (priceInputRef.current) {
      priceInputRef.current.focus();
    }

    // Dispatch the action to add the product to the selling list
    if (newPrice != "") {
      await dispatch(
        addinSellingProducts({
          productid: product.id,
          newprice: newPrice,
          oldprice: product.price,
        })
      );
    } else {
      setShowInputBox(false);
    }
  };

  const handleonaddremovesellingclick = () => {
    dispatch(removeFromSellingProducts(product.id));
  };
  const handleSubmitNewPrice = () => {
    setShowInputBox(false);
  };

  const handleonaddtrendingclick = async () => {
    setistrendingclick(true);
    dispatch(addProduct({ productid: product.id }));
    setIsAdded(true);
  };
  //////////////    Update products      ///////////////////////////////////////////////////////////////////////////

  const [textofbutton, settextofbutton] = useState("Edit");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filename, setfilename] = useState("Choose file");
  const [selectedimage, setselectedimage] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [isupdate, setisupdate] = useState(false);
  const updatedproductnameref = useRef("");
  const updatedpriceref = useRef(-1);

  const { categories } = useSelector((state) => state.category);

  const handleoneditclick = () => {
    settextofbutton("Update");
  };
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
      setfilename(file.name);
      setselectedimage(file);
      const fileUrl = URL.createObjectURL(file);
      setFileURL(fileUrl);
    }
  };
  const handleonupdateclick = () => {
    let formdata = null;
    if (selectedimage != null) {
      formdata = new FormData();
      formdata.append("file", selectedimage);
    }
    dispatch(
      updateProduct({
        productid: product.id,
        productname: updatedproductnameref.current.value,
        price: updatedpriceref.current.value,
        categoryid: selectedCategory,
        image: formdata,
        oldimagename: product.image,
      })
    ).then((res) => {
      console.log(res);
      setisupdate(true);
    });
  };

  //////////////    Best Selling Products  ///////////////////////////////////////////////////////////////////////

  const { loading_of_adding, message_of_adding, error_of_adding } = useSelector(
    (state) => state.bestsellingproducts
  );

  const [stateofrow, setstateofrow] = useState(false);
  const [loadingofaddingbestselling, setloadingofaddingbestselling] =
    useState(false);
  const [errorofaddingbestselling, seterrorofaddingbestselling] =
    useState(null);

  useEffect(() => {
    let timer;
    if (error_of_adding) {
      seterrorofaddingbestselling(true);
      timer = setTimeout(() => {
        seterrorofaddingbestselling(false);
      }, 5000);
    } else {
      seterrorofaddingbestselling(false);
    }
    return () => clearTimeout(timer);
  }, [error_of_adding]);

  // Handle loading_of_adding
  useEffect(() => {
    if (loadingofaddingbestselling) {
      setloadingofaddingbestselling(true);
    } else {
      setloadingofaddingbestselling(false);
    }
  }, [loading_of_adding]);

  useEffect(() => {
    if (error_of_adding) {
      setstateofrow(true);
    } else {
      setstateofrow(false);
    }
  }, [error_of_adding]);

  const handleonaddbestsellingclick = () => {
    setstateofrow(true);
    dispatch(
      addInBestSellingProducts({
        productid: product.id,
      })
    ).then((res) => {
      if (res.payload) {
        setIsAdded(true);
        setstateofrow(false);
      } else {
        setIsAdded(false);
        setstateofrow(false);
      }
    });
  };

  ////////////////// Remove from best selling ////////////////////////////////////////////////////////////////

  const { loading_of_removing, message_of_removing, error_of_removing } =
    useSelector((state) => state.bestsellingproducts);
  const [loadingofremovingbestselling, setloadingofremovingbestselling] =
    useState(false);
  const [errorofremovingbestselling, seterrorofremovingbestselling] =
    useState(null);
  useEffect(() => {
    let timer;
    if (error_of_removing) {
      seterrorofremovingbestselling(true);
      timer = setTimeout(() => {
        seterrorofremovingbestselling(false);
      }, 5000);
    } else {
      seterrorofremovingbestselling(false);
    }
    return () => clearTimeout(timer);
  }, [error_of_removing]);

  // Handle loading_of_adding
  useEffect(() => {
    if (loadingofremovingbestselling) {
      setloadingofremovingbestselling(true);
    } else {
      setloadingofremovingbestselling(false);
    }
  }, [loading_of_removing]);

  useEffect(() => {
    if (error_of_removing) {
      setstateofrow(true);
    } else {
      setstateofrow(false);
    }
  }, [error_of_removing]);

  const handleonremovebestsellingclick = () => {
    setstateofrow(true);
    dispatch(removeFromBestSellingProducts(product.id)).then((res) => {
      if (res.payload) {
        setIsAdded(true);
        setstateofrow(false);
      } else {
        setIsAdded(false);
        setstateofrow(false);
      }
    });
  };

  return (
    <>
      <tr>
        <td className="border border-gray-400 text-center">
          {about === "Image" && textofbutton === "Update" ? (
            <input
              className="pl-5"
              ref={updatedproductnameref}
              placeholder={`${product.productname}`}
            ></input>
          ) : (
            product.productname
          )}
        </td>
        <td className="border border-gray-400 text-center">
          Price: $
          {about === "Image" && textofbutton === "Update" ? (
            <input
              type="number"
              className="pl-5 w-20"
              ref={updatedpriceref}
              placeholder={`${product.price}`}
            ></input>
          ) : (
            product.productname
          )}
        </td>
        <td className="border border-gray-400 text-center">
          {about === "Image" && textofbutton === "Update" ? (
            <select
              className=" border border-gray-700 h-6 w-24 px-2  bg-slate-100 hover:bg-slate-300"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Options</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category}
                </option>
              ))}
            </select>
          ) : (
            product.category
          )}
        </td>
        {about != "Image" && (
          <td
            className={`border border-gray-400 text-center ${
              product.issale === 1 ? "h-14" : ""
            }`}
          >
            {product.issale === 0 ? (
              "Not on sale"
            ) : (
              <>
                <h1>{` - Old Price: $${product.oldprice} ,`}</h1>
                <h1>{` New Price: $${product.newprice}`}</h1>
              </>
            )}
          </td>
        )}

        <td className="border border-gray-400 text-center">
          {about === "Add in Trending" && (
            <div className="flex justify-center gap-2">
              <button
                className={`py-1 px-3 ${
                  isAdded ? "bg-green-400" : "bg-red-400 hover:bg-red-950"
                } hover:text-white rounded-lg`}
                onClick={handleonaddtrendingclick}
                disabled={isAdded}
              >
                {isAdded ? "Added" : "Add"}
              </button>
              {istrendingclick && loading && (
                <div className="self-center loading ease-linear rounded-full border-8 border-t-8 border-black h-5 w-5"></div>
              )}
              {istrendingclick && error && (
                <div className="bg-red-100 text-red-600 px-2 rounded-md">
                  error
                </div>
              )}
            </div>
          )}
          {about === "Show non selling products" && (
            <>
              <button
                className={`py-1 px-3 ${
                  isAdded ? "bg-green-400" : "bg-red-400 hover:bg-red-950"
                } hover:text-white rounded-lg`}
                onClick={handleonaddsellingclick}
                disabled={isAdded}
              >
                {isAdded ? "Added" : "Add"}
              </button>
              {showInputBox && (
                <div className="input-box">
                  <input
                    type="text"
                    ref={priceInputRef}
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="Enter new price"
                    className="border border-gray-400 p-1 mt-2"
                  />
                  <button
                    onClick={handleSubmitNewPrice}
                    className="py-1 px-3 bg-blue-400 hover:bg-blue-500 hover:text-white rounded-lg mt-2"
                  >
                    Submit
                  </button>
                </div>
              )}
            </>
          )}
          {about === "Remove" && (
            <div className="flex justify-center gap-2">
              <button
                className={`py-1 px-3 bg-red-400 hover:bg-red-950 hover:text-white rounded-lg ${
                  error ? "hidden" : ""
                }`}
                onClick={handleonremovetrendingclick}
              >
                Remove
              </button>
            </div>
          )}
          {about === "Image" ? (
            textofbutton === "Update" ? (
              <>
                <div className="flex flex-col justify-center gap-1">
                  <img
                    className=" self-center hover:cursor-pointer transition-transform duration-300"
                    src={`/upload/${product.image}`}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      transform: "scale(1)",
                      transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(6.67)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div className="flex self-center gap-2">
                    <label className=" self-center h-6 w-20 border overflow-hidden text-sm border-gray-600 outline-none ">
                      {filename}
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {fileURL ? (
                      <img
                        src={fileURL}
                        alt="Selected file"
                        className="hover:cursor-pointer transition-transform duration-300"
                        style={{
                          height: "30px",
                          width: "30px",
                          transform: "scale(1)",
                          transition: "transform 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(6.67)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center">
                <img
                  className="hover:cursor-pointer transition-transform duration-300"
                  src={`/upload/${product.image}`}
                  alt=""
                  style={{
                    height: "30px",
                    width: "30px",
                    transform: "scale(1)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(6.67)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            )
          ) : (
            <></>
          )}
          {about === "Remove from Selling Product" && (
            <>
              <button
                className={`py-1 px-3 ${
                  isAdded ? "bg-green-400" : "bg-red-400 hover:bg-red-950"
                } hover:text-white rounded-lg`}
                onClick={handleonaddremovesellingclick}
                disabled={isAdded}
              >
                {isAdded ? "Removed" : "Remove"}
              </button>
            </>
          )}
          {about === "Add in Best Selling" && (
            <>
              <div className="flex gap-2 justify-center">
                <button
                  className={`py-1 px-3 ${
                    isAdded ? "bg-green-400" : "bg-red-400 hover:bg-red-950"
                  } hover:text-white rounded-lg`}
                  onClick={handleonaddbestsellingclick}
                  disabled={isAdded}
                >
                  {isAdded ? "Added" : "Add"}
                </button>
                {stateofrow && loadingofaddingbestselling && (
                  <div className="self-center loading ease-linear rounded-full border-8 border-t-8 border-black h-5 w-5"></div>
                )}
                {!stateofrow &&
                  !loadingofaddingbestselling &&
                  errorofaddingbestselling && (
                    <div className="self-center bg-red-200 px-1 rounded-lg">
                      Error
                    </div>
                  )}
              </div>
            </>
          )}
          {about == "Remove product from best selling" && (
            <>
              <div className="flex gap-2 justify-center">
                <button
                  className={`py-1 px-3 ${
                    isAdded ? "bg-green-400" : "bg-red-400 hover:bg-red-950"
                  } hover:text-white rounded-lg`}
                  onClick={handleonremovebestsellingclick}
                  disabled={isAdded}
                >
                  {isAdded ? "Removed" : "Remove"}
                </button>
                {stateofrow && loadingofremovingbestselling && (
                  <div className="self-center loading ease-linear rounded-full border-8 border-t-8 border-black h-5 w-5"></div>
                )}
                {!stateofrow &&
                  !loadingofremovingbestselling &&
                  errorofremovingbestselling && (
                    <div className="self-center bg-red-200 px-1 rounded-lg">
                      Error
                    </div>
                  )}
              </div>
            </>
          )}
          {about == "Remove product from best selling" && (
            <>
              <div className="flex gap-2 justify-center">
                <button
                  className={`py-1 px-3 ${
                    isAdded ? "bg-green-400" : "bg-red-400 hover:bg-red-950"
                  } hover:text-white rounded-lg`}
                  onClick={handleonremovebestsellingclick}
                  disabled={isAdded}
                >
                  {isAdded ? "Removed" : "Remove"}
                </button>
                {stateofrow && loadingofremovingbestselling && (
                  <div className="self-center loading ease-linear rounded-full border-8 border-t-8 border-black h-5 w-5"></div>
                )}
                {!stateofrow &&
                  !loadingofremovingbestselling &&
                  errorofremovingbestselling && (
                    <div className="self-center bg-red-200 px-1 rounded-lg">
                      Error
                    </div>
                  )}
              </div>
            </>
          )}
        </td>
        {about === "Image" && (
          <td className="border border-gray-400 text-center">
            {textofbutton === "Edit" ? (
              <button
                className="px-4 py-1 bg-red-400 rounded-lg hover:bg-red-500 "
                onClick={handleoneditclick}
              >
                {textofbutton}
              </button>
            ) : (
              ""
            )}
            {textofbutton === "Update" ? (
              <button
                className={`px-4 py-1  rounded-lg  ${
                  isupdate ? "bg-green-500" : "bg-red-400 hover:bg-red-500"
                } `}
                onClick={handleonupdateclick}
              >
                {isupdate ? "Updated" : textofbutton}
              </button>
            ) : (
              ""
            )}
          </td>
        )}
      </tr>
    </>
  );
}

export default Item;
