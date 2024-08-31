import style from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={`${style.footercontainer} pt-16`}>
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-20 ">
        <div className="flex flex-col justify-center md:justify-start  items-center md:items-start w-3/4">
          <div className="">
            <img
              src="organic-store-white-logo.png"
              alt="#"
              className="w-60 h-32"
            />
          </div>
          <p className="text-gray-300 pt-5 leading-loose">
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque.
          </p>
        </div>
        <div className="flex flex-row md:flex-col w-full md:w-1/4 justify-center md:justify-start gap-20 md:gap-5">
          <div className="">
            <h1 className="text-white text-2xl ">Quick Links</h1>
            <ul className="text-gray-300 pt-5">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/about">Cart</Link>
              </li>
              <li>
                <Link to="/contact">Chectout</Link>
              </li>
              <li>
                <Link to="/about">Contact</Link>
              </li>
              <li>
                <Link to="/contact">Home</Link>
              </li>
              <li>
                <Link to="/about">My account</Link>
              </li>
              <li>
                <Link to="/contact">Shop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-2xl">Site Links</h1>
            <ul className="text-gray-300 pt-5">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/about">Cart</Link>
              </li>
              <li>
                <Link to="/contact">Chectout</Link>
              </li>
              <li>
                <Link to="/about">Contact</Link>
              </li>
              <li>
                <Link to="/contact">Home</Link>
              </li>
              <li>
                <Link to="/about">My account</Link>
              </li>
              <li>
                <Link to="/contact">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-20 w-2/3">
          <div>
            <h1 className="text-white text-3xl">Download Our Mobile App</h1>
            <p className="text-gray-300 pt-5 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam gravida sollicitudin. Praesent porta enim mi, non
              tincidunt libero interdum sit amet.
            </p>
          </div>
          <div className="">
            <h1 className="text-white text-2xl">Quick Links</h1>
            <ul className="text-green-500 pt-5">
              <li>
                <Link to="/about">Know More About Us</Link>
              </li>
              <li>
                <Link to="/about">Visit Store</Link>
              </li>
              <li>
                <Link to="/about">Let's Connect</Link>
              </li>
              <li>
                <Link to="/about">Locate Store</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-16 border-gray-700" />
      <div className="py-10 px-10 flex justify-between">
        <div>
          <h1 className="text-white">Copyright © 2024 | Organic Store</h1>
        </div>
        <div className="flex gap-4">
          <FaFacebook
            style={{ display: "inline-block", transition: "color 0.3s" }}
            className="text-gray-500 hover:text-green-500"
          />
          <AiFillInstagram
            style={{ display: "inline-block", transition: "color 0.3s" }}
            className="text-gray-500 hover:text-green-500"
          />
          <FaTwitter
            style={{ display: "inline-block", transition: "color 0.3s" }}
            className="text-gray-500 hover:text-green-500"
          />
        </div>
      </div>
    </div>
  );
}
export default Footer;
