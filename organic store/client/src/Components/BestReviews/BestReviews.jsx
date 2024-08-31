import { FaStar } from "react-icons/fa";
import style from "./BestReviews.module.css";

function BestReviews() {
  return (
    <div className={`py-10 ${style.BestReviewsContainer}`}>
      <h1 className="text-center text-2xl md:text-4xl">Customers Reviews</h1>
      <div className="text-center mt-5">
        <img src="logo-leaf-new.png" alt="#" className="mx-auto" />
      </div>
      <div className="mt-10  flex flex-col md:flex-row gap-5 justify-center mx-5 md:mx-auto">
        <div className="bg-white h-44 md:h-64 lg:h-80 p-5 lg:p-10 self-end  w-full md:w-1/3">
          <div className="text-center">
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />{" "}
          </div>
          <p className="text-center pt-2 lg:pt-5 ">
            LClick edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className="flex items-center justify-center pt-2 md:pt-5">
            <img
              src="client02-free-img.png"
              alt=""
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
            />
            <h1 className="ml-5 text-base lg:text-xl">Preeti jangid</h1>
          </div>
        </div>
        <div
          className={`h-64 md:h-80 lg:h-96 p-3 lg:p-5 xl:p-10 flex md:block flex-col justify-center items-center ${style.flexsecitem} w-full md:w-1/4`}
        >
          <div className="z-10 relative">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl text-white z-10">
              Deal Of The Day 15% Off On All Vegetables!
            </h1>
            <p className="text-white">
              I am text block. Click edit button to change this tex em ips.
            </p>
            <button className="py-3 sm:pr-7 sm:pl-4 md:pr-14 md:pl-8 rounded-lg mt-7 lg:mt-5 xl:mt-10">
              SHOP NOW
            </button>
          </div>

          <div className={`${style.flexsecblueffect}`}></div>
        </div>
        <div className="bg-white h-44 md:h-64 lg:h-80 p-5 lg:p-10 self-end w-full md:w-1/3">
          <div className="text-center">
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />
            <FaStar style={{ display: "inline-block" }} color="orange" />{" "}
          </div>
          <p className="text-center pt-2 lg:pt-5">
            LClick edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className="flex items-center justify-center pt-2 md:pt-5">
            <img
              src="client02-free-img.png"
              alt=""
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
            />
            <h1 className="ml-5 text-base lg:text-xl">Preeti jangid</h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default BestReviews;
