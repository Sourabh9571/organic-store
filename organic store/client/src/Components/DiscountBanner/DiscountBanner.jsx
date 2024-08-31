import style from "./DiscountBanner.module.css";

function DiscountBanner() {
  return (
    <div className={`${style.DiscountBannerContainer}`}>
      <div className="bg-black flex flex-col md:flex-row py-8 md:py-12 px-5 justify-between items-center relative">
        <h1 className="text-2xl md:text-4xl text-white ">
          Get 25% Off On Your First Purchase!
        </h1>
        <button className="py-3 pr-14 pl-8 rounded-lg mt-5 md:mt-0">
          SHOP NOW
        </button>
        <div className={`py-5 px-5 bg-black absolute ${style.arrowicon}`}></div>
      </div>
      <div className="text-center py-6 px-5 text-2xl">
        <h1>Try It For Free. No Registration Needed.</h1>
      </div>
    </div>
  );
}

export default DiscountBanner;
