import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
export const Room = ({ data }) => {
  return (
    <div className="room_wrapper relative z-30" id="room">
      <Splide
        options={{
          type: "loop",
          // autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          arrows: "slider",
          perPage: 3,
          gap: "1.5rem",
        }}
        hasSliderWrapper
      >
        {data &&
          data.map((d) => {
            return (
              <>
                <SplideSlide>
                  <div className="relative" key={d.place_room_id}>
                    <div className="h-48 overflow-hidden bg-cover flex items-center jusitfy-center">
                      <img src={d.img} alt="room" />
                    </div>
                    <div className="room_bg pt-3 px-4 pb-6">
                      <h2 className="uppercase text-base text_color_1">
                        {d.name}
                      </h2>
                      <h6 className="mb-4 capitalize text-xs">{d.type}</h6>
                      <div className="flex items-center justify-between">
                        <button className="cursor-pointer uppercase text-white py-1 px-2 text-xs bg_main no-wrap">
                          book now
                        </button>
                        <div className="mr-4">
                          <p className="text-xs">
                            {d.price}₮/&nbsp;
                            <span className="room_price">per night</span>
                          </p>
                          <p className="text-xs mt-1">
                            03 зочин {d.area}м<sup>2</sup>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              </>
            );
          })}
      </Splide>
    </div>
  );
};
