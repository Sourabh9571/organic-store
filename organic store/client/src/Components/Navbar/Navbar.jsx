import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 justify-between h-28 ">
        <div className={`navbar-start ${style.navstartbox} pb-6`}>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Everthing</a>
              </li>
              <li>
                <a>Groceries</a>
              </li>
              <li>
                <a>Juice</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              src="organicstorelogo.svg"
              alt="#"
              className="md:h-20 md:w-44 h-10 w-20 "
            />
          </a>
        </div>
        <div
          className={`navbar-center hidden lg:flex ${style.navmidbox} justify-between pt-3`}
        >
          <div>
            <ul
              className={`menu menu-horizontal px-1 ${style.navmidfont} navlist`}
            >
              <li>
                <Link to={"/shop"}>Everything</Link>
              </li>
              <li>
                <a>Groceries</a>
              </li>
              <li>
                <a>Juice</a>
              </li>
            </ul>
          </div>
          <div>
            <ul
              className={`menu menu-horizontal px-1 ${style.navmidfont} navlist`}
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end w-28 pt-3 flex gap-3 text-xl">
          <span className="woocommerce-Price-amount amount text-green-500">
            <bdi>
              <span className="woocommerce-Price-currencySymbol">£</span>0.00
            </bdi>
          </span>
          <CiShoppingCart />
          <FaUser />
        </div>
      </div>
    </>
  );
};
export default Navbar;
