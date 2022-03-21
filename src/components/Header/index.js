import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
export const Header = () => {
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
        <SplideSlide className="w-screen h-screen">
          <div className="relative w-full h-full">
            <Image src={"/img/header/img_1.jpg"} alt="logo" layout="fill" />
            <div className="flex flex-col items-center justify-center relative z-20 h-full pb-48">
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
                welcome to corporate
              </h1>
              <span className="w-16 scratches bg-white mb-2"></span>
              <h5 className="uppercase text-white tracking-wider">
                a place experience and enjoy the life
              </h5>
            </div>
            <span className="absolute inset-0 z-10 bg-black opacity-50"></span>
          </div>
        </SplideSlide>
        <SplideSlide className="w-screen h-screen">
          <div className="relative w-full h-full">
            <Image src="/img/header/img_2.jpg" alt="logo" layout="fill" />
            <div className="flex flex-col items-center justify-center relative z-20 h-full pb-48">
              <div className="w-32 mb-4">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={400}
                  height={286}
                />
              </div>
              <h5 className="uppercase text-white mb-3 font-semibold">
                corporate hotel convetion center
              </h5>
              <h1 className="text-white uppercase text-4xl mb-2 font-bold">
                welcome to corporate
              </h1>
              <span className="w-16 scratches bg-white mb-2"></span>
              <h5 className="uppercase text-white tracking-wider">
                a place experience and enjoy the life
              </h5>
            </div>
            <span className="absolute inset-0 z-10 bg-black opacity-50"></span>
          </div>
        </SplideSlide>
        <SplideSlide className="w-screen h-screen">
          <div className="relative w-full h-full">
            <Image src="/img/header/img_2.jpg" alt="logo" layout="fill" />
            <div className="flex flex-col items-center justify-center relative z-20 h-full pb-48">
              <div className="w-32 mb-4">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={400}
                  height={286}
                />
              </div>
              <h5 className="uppercase text-white mb-3 font-semibold">
                corporate hotel convetion center
              </h5>
              <h1 className="text-white uppercase text-4xl mb-2 font-bold">
                welcome to corporate
              </h1>
              <span className="w-16 scratches bg-white mb-2"></span>
              <h5 className="uppercase text-white tracking-wider">
                a place experience and enjoy the life
              </h5>
            </div>
            <span className="absolute inset-0 z-10 bg-black opacity-50"></span>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};
