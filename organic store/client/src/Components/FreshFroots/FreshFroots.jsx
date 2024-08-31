import style from "./FreshFroots.module.css";

function FreshFroots() {
  return (
    <div className={`${style.freshfoodbox} relative`}>
      <div className={`absolute ${style.leave}`}>
        <img src="image.png" alt="" />
      </div>
      <div className="flex flex-col md:flex-row gap-5 px-5  py-32">
        <div className={`box h-full md:h-96 bg-white px-8 py-10 ${style.item}`}>
          <div>
            <h1 className="text-2xl">Farm Fresh Fruits</h1>
            <p className="font-semibold mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, sapiente?
            </p>
            <button className="py-3 pr-14 pl-8 rounded-lg mt-6">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className={`box bg-white px-8 py-10 ${style.item}`}>
          <div>
            <h1 className="text-2xl">Fresh Vegetables</h1>
            <p className="font-semibold mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, sapiente?
            </p>
            {/* <button className="bg-green-400 mt-6">Success</button> */}
            <button className="py-3 pr-14 pl-8 rounded-lg mt-6">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className={`box bg-white px-8 py-10 ${style.item}`}>
          <div>
            <h1 className="text-2xl">Organic Legume</h1>
            <p className="font-semibold mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, sapiente?
            </p>
            {/* <button className="bg-green-400 mt-6">Success</button> */}
            <button className="py-3 pr-14 pl-8 rounded-lg mt-6">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreshFroots;
