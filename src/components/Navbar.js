import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
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
                home
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#room"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                room
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#service"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                service
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#about"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                about
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#event"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                event
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/1#footer"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>weither</h1>
      </div>
    </div>
  );
}
