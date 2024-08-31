import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import BestSellingProducts from "../../Components/BestSellingProducts/BestSellingProducts";
import DiscountBanner from "../../Components/DiscountBanner/DiscountBanner";
import FreshFroots from "../../Components/FreshFroots/FreshFroots";
import TrendingProduct from "../../Components/TrendingProduct/TrendingProduct";
import BestReviews from "../../Components/BestReviews/BestReviews";
import Footer from "../../Components/Footer/Footer";

import React from "react";

function Home() {
  return (
    <div>
      <>
        <Banner />
        <BestSellingProducts />
        <FreshFroots />
        <DiscountBanner />
        <TrendingProduct />
        <BestReviews />
      </>
    </div>
  );
}

export default Home;
