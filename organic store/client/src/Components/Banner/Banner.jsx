import React from "react";
import style from "./Banner.module.css";
import { FaTruck } from "react-icons/fa6";
import { LuContact2 } from "react-icons/lu";
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlineCloudSync } from "react-icons/md";

function Banner() {
  return (
    <>
      <div className={`${style.banner} pt-24 pb-24`}>
        <div className=" flex m-auto container">
          <div className={`${style.left} `}>
            <img src="organic-products-hero.png" alt="#" />
          </div>
          <div className={`${style.right} pt-10`}>
            <img src="logo-leaf-new.png" alt="#" />
            <h1 className={`pt-5`}>Best Quality Products</h1>
            <h2 className="text-6xl pt-5">Join The Organic Movement!</h2>
            <p className="text-xl pt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              sunt eligendi. Officia omnis velit accusamus?
            </p>
            <button className="btn btn-success mt-10">Success</button>
          </div>
        </div>
      </div>
      <div className=" bg-black py-8 px-16">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white ${style.orderdetaibox}`}
        >
          <div className="py-9 px-5 flex gap-5">
            <FaTruck color="green" size={30} />
            <div>
              <h1>Free Shipping</h1>
              <h3>Above $5 Only</h3>
            </div>
          </div>
          <div className="flex gap-5 py-9 px-5">
            <LuContact2 color="green" size={30} />
            <div>
              <h1>Certified Organic</h1>
              <h3>100% Guarantee</h3>
            </div>
          </div>
          <div className="flex gap-5 py-9 px-5">
            <CiMoneyBill color="green" size={30} />
            <div>
              <h1>Huge Saving</h1>
              <h3>At Lowest Price</h3>
            </div>
          </div>
          <div className="flex gap-5 py-9 px-5">
            <MdOutlineCloudSync color="green" size={30} />
            <div>
              <h1>Easy Return </h1>
              <h3>No Questions Asked</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
