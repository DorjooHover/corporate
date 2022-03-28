import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { Star } from "@mui/icons-material";
export const Testimonial = ({ data }) => {
  console.log(data);
  return (
    <div className="testimonial_wrapper relative z-30" id="room">
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
                  <div
                    className=" flex flex-col items-center text-white"
                    key={d.place_testimonial_id}
                  >
                    <h2 className="capitalize text-base text-white mb-4">
                      {d.name}
                    </h2>
                    <h6 className="mb-4 capitalize text-xs mb-10 text-white">
                      {d.comment}
                    </h6>
                    <div className="rating text-xs text-white">
                      <Star className="w-3" />
                      <Star className="w-3" />
                      <Star className="w-3" />
                      <Star className="w-3" />
                      <Star className="w-3" />
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
