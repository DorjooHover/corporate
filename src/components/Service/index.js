import Image from "next/image";
import { useState } from "react";

export default function Service({ data }) {
  const [bar, setBar] = useState(false);
  const [spa, setSpa] = useState(false);
  const [health, setHealth] = useState(false);
  const [concert, setConcert] = useState(false);
  const handleService = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "bar":
      case "bar_text":
      case "bar_span":
        setBar(true);
        break;
      case "spa":
      case "spa_text":
      case "spa_span":
        setSpa(true);
        break;
      case "health":
      case "health_text":
      case "health_span":
        setHealth(true);
        break;
      case "concert":
      case "concert_text":
      case "concert_span":
        setConcert(true);
        break;
      default:
        null;
    }
  };
  const handleServiceOver = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "bar":
      case "bar_text":
      case "bar_span":
        setBar(false);
        break;
      case "spa":
      case "spa_text":
      case "spa_span":
        setSpa(false);
        break;
      case "health":
      case "health_text":
      case "health_span":
        setHealth(false);
        break;
      case "concert":
      case "concert_text":
      case "concert_span":
        setConcert(false);
        break;
      default:
        null;
    }
  };
  return (
    <>
      {bar && (
        <div className="absolute w-5/12 z-30 h-2/3 service_detail_1 flex items-end ">
          <div className="relative ">
            <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
            <div className="px-6 py-3 relative z-40">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                bar & <span className="text-white">restaurants</span>
              </h4>
              <p className="text-white text-xs pb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim eaque est qui reiciendis cumque voluptatem nostrum
                provident, aperiam fugiat!
              </p>
            </div>
          </div>
        </div>
      )}
      {spa && (
        <div className="absolute w-5/12 z-30 h-2/3 service_detail_2 flex items-end ">
          <div className="relative ">
            <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
            <div className="px-6 py-3 relative z-40">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                bar & <span className="text-white">restaurants</span>
              </h4>
              <p className="text-white text-xs pb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim eaque est qui reiciendis cumque voluptatem nostrum
                provident, aperiam fugiat!
              </p>
            </div>
          </div>
        </div>
      )}
      {health && (
        <div className="absolute w-5/12 z-30 h-2/3 service_detail_3 flex items-end ">
          <div className="relative ">
            <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
            <div className="px-6 py-3 relative z-40">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                bar & <span className="text-white">restaurants</span>
              </h4>
              <p className="text-white text-xs pb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim eaque est qui reiciendis cumque voluptatem nostrum
                provident, aperiam fugiat!
              </p>
            </div>
          </div>
        </div>
      )}
      {concert && (
        <div className="absolute w-5/12 z-30 h-2/3 service_detail_4 flex items-end ">
          <div className="relative ">
            <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
            <div className="px-6 py-3 relative z-40">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                bar & <span className="text-white">restaurants</span>
              </h4>
              <p className="text-white text-xs pb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim eaque est qui reiciendis cumque voluptatem nostrum
                provident, aperiam fugiat!
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 relative">
        <div
          className="flex items-center justify-center flex-col relative service_1 z-30"
          onMouseOver={handleService}
          onMouseOut={handleServiceOver}
        >
          <h4
            className="uppercase text-2xl font-medium text_color_1 z-20 relative"
            id="bar_text"
          >
            bar &{" "}
            <span className="text-white" id="bar_span">
              <br />
              restaurants
            </span>
          </h4>
          <div
            className="absolute z-10 opacity-60 bg-black inset-0"
            id="bar"
          ></div>
        </div>
        <div
          className="flex items-center justify-center flex-col relative  service_2"
          onMouseOver={handleService}
          onMouseOut={handleServiceOver}
        >
          <div className="relative text-center z-20" id="spa_text">
            <h4
              className="uppercase text-2xl font-medium text_color_1 z-20 relative"
              id="spa_text"
            >
              bar &{" "}
              <span className="text-white" id="spa_span">
                <br />
                restaurants
              </span>
            </h4>
          </div>
          <div
            className="absolute z-10 opacity-60 bg-black inset-0"
            id="spa"
          ></div>
        </div>
        <div
          className="flex items-center justify-center flex-col relative service_3"
          onMouseOver={handleService}
          onMouseOut={handleServiceOver}
        >
          <div className="relative text-center z-20" id="health_text">
            <h4
              className="uppercase text-2xl font-medium text_color_1 z-20 relative"
              id="health_text"
            >
              bar &{" "}
              <span className="text-white" id="health_span">
                <br />
                restaurants
              </span>
            </h4>
          </div>
          <div
            className="absolute z-10 opacity-60 bg-black inset-0"
            id="health"
          ></div>
        </div>
        <div
          className="flex items-center justify-center flex-col relative service_4"
          onMouseOver={handleService}
          onMouseOut={handleServiceOver}
        >
          <div className="relative text-center z-20" id="concert_text">
            <h4
              className="uppercase text-2xl font-medium text_color_1 z-20 relative"
              id="concert_text"
            >
              bar &{" "}
              <span className="text-white" id="concert_span">
                <br />
                restaurants
              </span>
            </h4>
          </div>
          <div
            className="absolute z-10 opacity-60 bg-black inset-0"
            id="concert"
          ></div>
        </div>
      </div>
    </>
  );
}
