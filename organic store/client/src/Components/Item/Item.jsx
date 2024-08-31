import React from "react";
import style from "./Item.module.css";
import { CiStar } from "react-icons/ci";

function Item({ data }) {
  return (
    <>
      <div className={`${style.item} relative`}>
        <img
          src={data.image}
          alt=""
          // className="md-52 h-64  md:w-72 md:h-80 object-cover"
        />
        <div className="text-center">
          <h1 className=" pt-3">{data.productname}</h1>
          <span>
            <CiStar style={{ display: "inline-block" }} />
            <CiStar style={{ display: "inline-block" }} />
            <CiStar style={{ display: "inline-block" }} />
            <CiStar style={{ display: "inline-block" }} />
            <CiStar style={{ display: "inline-block" }} />
          </span>
          {data.sale ? (
            <div className="flex justify-center gap-4">
              <h1 className="line-through text-gray-500">${data.oldprice}</h1>
              <h1>${data.newprice}</h1>
            </div>
          ) : null}
        </div>
        {data.sale ? <div className={`${style.saleicon}`}>Sale</div> : null}
      </div>
    </>
  );
}

export default Item;
