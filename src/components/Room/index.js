import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
export const Room = () => {
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
                    <SplideSlide>
                         <div className="relative">
                              <div>
                                   <Image
                                        src="/img/room/img_1.jpg"
                                        width={783}
                                        height={522}
                                        layout="responsive"
                                   />
                              </div>
                              <div className="room_bg pt-3 px-4 pb-6">
                                   <h2 className="uppercase text-base">
                                        classic room
                                   </h2>
                                   <h6 className="mb-4 capitalize text-xs">
                                        single room
                                   </h6>
                                   <div className="flex items-center justify-between">
                                        <button className="cursor-pointer uppercase text-white py-1 px-2 text-xs bg_main no-wrap">
                                             book now
                                        </button>
                                        <div className="mr-4">
                                             <p className="text-xs">
                                                  500,000₮/&nbsp;
                                                  <span className="room_price">
                                                       per night
                                                  </span>
                                             </p>
                                             <p className="text-xs mt-1">
                                                  03 зочин 25м<sup>2</sup>
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </SplideSlide>
                    <SplideSlide>
                         <div className="relative">
                              <div>
                                   <Image
                                        src="/img/room/img_1.jpg"
                                        width={783}
                                        height={522}
                                        layout="responsive"
                                   />
                              </div>
                              <div className="room_bg pt-3 px-4 pb-6">
                                   <h2 className="uppercase text-base">
                                        classic room
                                   </h2>
                                   <h6 className="mb-4 capitalize text-xs">
                                        single room
                                   </h6>
                                   <div className="flex items-center justify-between">
                                        <button className="cursor-pointer uppercase text-white py-1 px-2 text-xs bg_main no-wrap">
                                             book now
                                        </button>
                                        <div className="mr-4">
                                             <p className="text-xs">
                                                  500,000₮/&nbsp;
                                                  <span className="room_price">
                                                       per night
                                                  </span>
                                             </p>
                                             <p className="text-xs mt-1">
                                                  03 зочин 25м<sup>2</sup>
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </SplideSlide>
                    <SplideSlide>
                         <div className="relative">
                              <div>
                                   <Image
                                        src="/img/room/img_1.jpg"
                                        width={783}
                                        height={522}
                                        layout="responsive"
                                   />
                              </div>
                              <div className="room_bg pt-3 px-4 pb-6">
                                   <h2 className="uppercase text-base">
                                        classic room
                                   </h2>
                                   <h6 className="mb-4 capitalize text-xs">
                                        single room
                                   </h6>
                                   <div className="flex items-center justify-between">
                                        <button className="cursor-pointer uppercase text-white py-1 px-2 text-xs bg_main no-wrap">
                                             book now
                                        </button>
                                        <div className="mr-4">
                                             <p className="text-xs">
                                                  500,000₮/&nbsp;
                                                  <span className="room_price">
                                                       per night
                                                  </span>
                                             </p>
                                             <p className="text-xs mt-1">
                                                  03 зочин 25м<sup>2</sup>
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </SplideSlide>
               </Splide>
          </div>
     );
};
