import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
export const Header = ({ data }) => {
  return (
    <div className="header_wrapper " id="home">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          arrows: "slider",
        }}
        hasSliderWrapper
      >
        {data &&
          data.map((d) => {
            return (
              <>
                <SplideSlide className="w-screen h-screen" key={d.header_id}>
                  <div className="relative w-full h-full" key="d.header_id">
                    {/* <Image
                    src={"/img/header/img_1.jpg"}
                    alt="logo"
                    layout="fill"
                  /> */}
                    <img
                      src={d.img}
                      alt="logo"
                      className="w-full h-full z-10 absolute"
                    />
                    <div className="flex flex-col items-center justify-center relative z-20 h-full pb-48 w-full">
                      <div className="w-32 mb-4">
                        <Image
                          src={"/img/logo.png"}
                          alt="logo"
                          width={400}
                          height={286}
                        />
                      </div>
                      <h5 className="uppercase text-white mb-3 font-semibold">
                        corporate hotel convetion center
                      </h5>
                      <h1 className="text-white uppercase text-4xl mb-2 font-bold">
                        {d.title}
                      </h1>
                      <span className="w-16 scratches bg-white mb-2"></span>
                      <h5 className="uppercase text-white tracking-wider">
                        {d.description}
                      </h5>
                    </div>
                    <span className="absolute inset-0 z-10 bg-black opacity-50"></span>
                  </div>
                </SplideSlide>
              </>
            );
          })}
      </Splide>
    </div>
  );
};
