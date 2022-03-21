import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col items-center room_wrapper ">
      <div className="py-12 w-auto w-80 relative">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={2400}
          height={1598}
          layout="responsive"
        />
      </div>
      <p className="text-xs py-8">
        <b>Lorem ipsum dolor sit amet consectetur.</b>
        Lorem ipsum dolor sit.
      </p>
      <div className="flex justify-between items-center pb-8 pt-4">
        <div className="flex">
          <div className="w-auto w-20 mr-8">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={400}
              height={376}
              layout="responsive"
            />
          </div>
          <div className="w-auto w-20 mr-8">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={400}
              height={376}
              layout="responsive"
            />
          </div>
          <div className="w-auto w-20 mr-8">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={400}
              height={376}
              layout="responsive"
            />
          </div>
          <div className="w-auto w-20 mr-8">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={400}
              height={376}
              layout="responsive"
            />
          </div>
        </div>
        <div className="w-auto w-20 mr-8">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={400}
            height={376}
            layout="responsive"
          />
        </div>
        <p>weither</p>
        <div className="ml-8">
          <ul className="flex justify-between ">
            <li>
              <Link href="/">
                <a>lorem</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>lorem</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>lorem</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>lorem</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>lorem</a>
              </Link>
            </li>
          </ul>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            veniam.
          </p>
        </div>
      </div>
    </div>
  );
}
