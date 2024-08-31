import style from "./TrendingProduct.module.css";
import list from "../../../../data.json";
import Item from "../Item/Item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Slices/trendingSlice/trendingSlice";

function TrendingProduct() {
  const dispatch = useDispatch();
  const { loading, trendingproducts, error } = useSelector(
    (state) => state.trendingproducts
  );

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <>
      {trendingproducts.lenght != 0 && (
        <div
          className={`pt-10 pb-10 md:pb-20 sm:pb-15  md:pt-20  sm:pt-15 ${style.box}`}
        >
          <h1 className="text-4xl text-center">Trending Products</h1>
          <div className="text-center pt-5">
            <img src="logo-leaf-new.png" alt="Your Image" className="mx-auto" />
          </div>
          <div className="flex">
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-5  mx-5 relative">
              {list.map((data) => (
                <Item data={data} key={data.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TrendingProduct;
