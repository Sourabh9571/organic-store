import style from "./Adminlayout.module.css";
import { Route, Routes, Link } from "react-router-dom";
import Allproducts from "../Allproducts/Allproducts.jsx";
import Addproduct from "../AdminComponents/Addproduct/Addproduct.jsx";
import Addproductintrending from "../AdminComponents/addproductintrending/Addproductintrending.jsx";
import { useState } from "react";
import Removetrendingproduct from "../AdminComponents/showtrendingproduct/Removetrendingproduct.jsx";
import Shownonsellingproduct from "../AdminComponents/Shownonsellingproduct/Shownonsellingproduct.jsx";
import Removeproductfromselling from "../AdminComponents/Removeproductfromselling/Removeproductfromselling.jsx";
import Addinbestselling from "../AdminComponents/Addinbestselling/Addinbestselling.jsx";
import Removeproductfrombestselling from "../AdminComponents/Removeproductfrombestselling/Removeproductfrombestselling.jsx";

function Admin() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentvalue, setcurrentvalue] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={`w-screen h-screen ${style.box} pt-0 md:pt-16`}>
      <div className="mx-auto bg-white w-full h-full md:h-5/6 md:w-5/6  rounded-lg">
        <div>
          <h1 className="text-2xl pt-5 pl-5"> Welcome in Admin Page !</h1>
        </div>
        <div className="relative flex gap-40">
          <div>
            <h2
              className={`mt-5 border border-gray-700  w-72 px-2 bg-slate-100 ml-5  hover:cursor-pointer  hover:bg-slate-300 ${style.aboutproduct}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About Product
            </h2>
            {isHovered && (
              <div className={`ml-5 ${style.submenu} relative z-10`}>
                <h2
                  className=" border border-t-0 w-72 px-2  border-gray-700  bg-slate-100  hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/addproduct"}
                    onClick={() => setcurrentvalue("Add new product")}
                  >
                    Add new product
                  </Link>
                </h2>
                <h2
                  className=" border border-t-0 w-72 px-2 border-gray-700  bg-slate-100  hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/allproducts"}
                    onClick={() => setcurrentvalue("Show all products")}
                  >
                    Show all products
                  </Link>
                </h2>
                <h2
                  className=" border border-t-0  border-gray-700 w-72 px-2  bg-slate-100  hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/addinsellingproduct"}
                    onClick={() => setcurrentvalue("Add Product in Selling")}
                  >
                    {" "}
                    Add Product in Selling
                  </Link>
                </h2>
                <h2
                  className=" border border-t-0  border-gray-700 w-72 px-2  bg-slate-100  hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/removeproductfromselling"}
                    onClick={() =>
                      setcurrentvalue("Remove product from Selling")
                    }
                  >
                    {" "}
                    Remove product from Selling
                  </Link>
                </h2>
                <h2
                  className=" border border-t-0  border-gray-700 w-72 px-2  bg-slate-100  hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/addtrendingproduct"}
                    onClick={() => setcurrentvalue("Add Product in trending")}
                  >
                    Add Product in trending
                  </Link>
                </h2>
                <h2
                  className=" border border-t-0  border-gray-700 w-72 px-2    bg-slate-100 hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/removetrendingproduct"}
                    onClick={() =>
                      setcurrentvalue("Remove product from trending")
                    }
                  >
                    {" "}
                    Remove product from trending
                  </Link>
                </h2>
                <h2
                  className=" border border-t-0  border-gray-700 w-72 px-2    bg-slate-100 hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/addinbestselling"}
                    onClick={() => setcurrentvalue("Add in Best Selling")}
                  >
                    {" "}
                    Add in Best Selling
                  </Link>
                </h2>
                <h2
                  className=" border border-t-0  border-gray-700 w-72 px-2    bg-slate-100 hover:cursor-pointer  hover:bg-slate-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={"/admin/removefrombestselling"}
                    onClick={() => setcurrentvalue("Remove from Best Selling")}
                  >
                    {" "}
                    Remove from Best Selling
                  </Link>
                </h2>
              </div>
            )}
          </div>
          <div className="mt-5 ">
            <h2>{currentvalue}</h2>
          </div>
          <Routes>
            <Route path="/allproducts" element={<Allproducts />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route
              path="/addtrendingproduct"
              element={<Addproductintrending />}
            />
            <Route
              path="/removetrendingproduct"
              element={<Removetrendingproduct />}
            />
            <Route
              path="/addinsellingproduct"
              element={<Shownonsellingproduct />}
            />
            <Route
              path="/removeproductfromselling"
              element={<Removeproductfromselling />}
            />
            <Route path="/addinbestselling" element={<Addinbestselling />} />
            <Route
              path="/removefrombestselling"
              element={<Removeproductfrombestselling />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
