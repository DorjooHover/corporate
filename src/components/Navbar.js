import Image from "next/image";
import Link from "next/link";
import { DarkMode } from "@mui/icons-material";
export default function Navbar({ data }) {
  return (
    <div className="flex justify-between nav_bg fixed w-full px-10 py-3 top-0 left-0 z-40">
      <div className="flex items-center">
        <div className="w-32 h-auto mr-4">
          <Image
            src={"/img/logo.png"}
            alt="corporate"
            width={400}
            height={286}
            layout="responsive"
          />
        </div>
        <ul className="flex">
          <li className="mx-2">
            <Link href={"/1"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                нүүр
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#room"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                өрөө
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#service"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                үйлчилгээ
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#about"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                бидний тухай
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#event"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                арга хэмжээ
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#footer"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                холбоо барих
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {data && (
        <div className="flex items-center text-white">
          <div>
            {data.weather[0] && (
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="index"
              />
            )}
          </div>
          <div className="mx-2">
            {Math.round(data.temp)}
            <sup>o</sup>C
          </div>
          {data.weather[0] && <div>{data.weather[0].main}</div>}
        </div>
      )}
    </div>
  );
}
