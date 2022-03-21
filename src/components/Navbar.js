import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between nav_bg fixed w-full px-10 py-3 top-0 left-0">
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
            <Link href={"/"}>
              <a className="px-3 py-2 btn_bg text-white uppercase font-xl">
                home
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
