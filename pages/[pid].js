import Head from "next/head";
import Image from "next/image";
import About from "../src/components/About";
import History from "../src/components/History";
import { Header } from "../src/components/Header";
import { Room } from "../src/components/Room";
import Service from "../src/components/Service";
import { Testimonial } from "../src/components/Testimonial";
import Event from "../src/components/Event";
import User from "./User";
import Footer from "../src/components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../src/components/Navbar";
import { useState, useEffect } from "react";
const api = {
  key: "2fe1d5212808e1e5e76af92e508fb2e3",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function Main() {
  const router = useRouter();
  const { pid } = router.query;
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState();
  const [data, setData] = useState([]);

  const loadWeather = async (req, res) => {
    try {
      let weather = await axios.get(
        `${api.base}weather?q=${"ulaanbaatar"}&units=metric&APPID=${api.key}`
      );
      setTemp(weather.data.main.temp);
      setWeather(weather.data.weather);

      let data = await axios.get("/api/main");
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // loadWeather();
  useEffect(() => {
    loadWeather();
  }, []);
  return (
    <>
      <Navbar data={{ weather, temp, pid }} />
      <Header data={data.headerData} />
      <div className="bg relative ">
        <div className="room relative z-30 pb-16" id="room">
          <div className="pt-16 room_wrapper">
            <div className="flex justify-between items-center">
              <h3 className="uppercase text-xl">
                <span className="text_color_1">rooms</span> accommodation
              </h3>
              <button className="uppercase py-1 px-2 border border-gray-300 text-gray-600 text-xs">
                view all
              </button>
            </div>
            <p className="capitalize text-xs mt-2 mb-6">
              designed as a privileged almost private place where youll feel
              right at home
            </p>
          </div>
          <Room data={data.roomData} />
          <span className="absolute bottom-0 h-1/2 bg_main opacity-70 w-full z-20"></span>
        </div>
        <div className="service relative z-30 pb-16" id="service">
          <div className="pt-16 service_wrapper">
            <div className="flex justify-between items-center">
              <h3 className="uppercase text-xl">
                <span className="text_color_1">facilities </span>& services
              </h3>
              <button className="uppercase py-1 px-2 border border-gray-300 text-gray-600 text-xs">
                view all
              </button>
            </div>
            <p className="capilalize text-xs mt-2 mb-6">
              with the best luxury spa, salon and wedding experiences
            </p>
          </div>
          <Service data={data.serviceData} />
        </div>
        <div className="about relative z-30 pb-16" id="about">
          <div className="pt-16 about_wrapper">
            <div className="flex justify-between items-center">
              <h3 className="uppercase text-xl">
                <span className="text_color_1">about &</span> history
              </h3>
            </div>
            <p className="capitalize z-30 pb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dignissimos?
            </p>
          </div>
          <div className="w-4/6 mx-auto">
            <div className="flex justify-between">
              <History />
              <About />
            </div>
            <div className="flex justify-between">
              <div className="flex justify-between items-center mt-10 w-5/12">
                <div className="w-auto h-10">
                  <Image
                    src="/img/about/sign.png"
                    width={97}
                    height={37}
                    alt="sign"
                  />
                </div>
                <p className="text-xs font-semibold">Cheif Executive Officer</p>
              </div>
              <div className="flex justify-between items-center mt-10 w-5/12">
                <div className="w-auto h-10">
                  <Image
                    src="/img/about/sign.png"
                    width={97}
                    height={37}
                    alt="sign"
                  />
                </div>
                <p className="text-xs font-semibold">Cheif Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial relative z-30 pb-12" id="testimonial">
          <div className="text-center mb-12 pt-8 relative z-30">
            <h3 className="uppercase font-medium text-white text-xl">
              testimonial
            </h3>
            <p className=" text-white font-medium capitalize">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="w-2/3 mx-auto">
            <Testimonial data={data.testimonialData} />
          </div>
          <span className="absolute inset-0 opacity-70 bg_main z-10"></span>
        </div>
        <div
          className="event relative z-30 py-12 bg_event bg_color_2 "
          id="event"
        >
          <div className="flex event_wrapper justify-center w-8/12 mx-auto">
            <Event data={data.eventData} />
            <User data={pid} />
          </div>
        </div>
        <div className="relative z-30 bg-zinc-200" id="footer">
          <Footer data={{ weather, temp, pid }} />
        </div>
        <span className="absolute opacity-70 inset-0 bg-white z-10"></span>
      </div>
    </>
  );
}
