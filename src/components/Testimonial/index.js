import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { Star } from "@mui/icons-material";
export const Testimonial = () => {
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
                    <SplideSlide>
                         <div className=" flex flex-col items-center text-white">
                              <h2 className="capitalize text-base text-white mb-4">
                                   guest
                              </h2>
                              <h6 className="mb-4 capitalize text-xs mb-10 text-white">
                                   Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Commodi, odit.
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
                    <SplideSlide>
                         <div className=" flex flex-col items-center text-white">
                              <h2 className="capitalize text-base text-white mb-4">
                                   guest
                              </h2>
                              <h6 className="mb-4 capitalize text-xs mb-10 text-white">
                                   Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Commodi, odit.
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
                    <SplideSlide>
                         <div className=" flex flex-col items-center text-white">
                              <h2 className="capitalize text-base text-white mb-4">
                                   guest
                              </h2>
                              <h6 className="mb-4 capitalize text-xs mb-10 text-white">
                                   Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Commodi, odit.
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
               </Splide>
          </div>
     );
};
