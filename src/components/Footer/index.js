import Image from "next/image";
import Link from "next/link";
export default function Footer({ data }) {
  return (
    <div className="flex flex-col items-center footer_wrapper pb-4">
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
        <b>Махатма Ганди гудамж 39, Сүхбаатар, Улаанбаатар, Монгол, 17011 - </b>
        (+976) 7000 2030 - INFO@CORPORATEHOTEL.MN
      </p>
      {/* <hr /> */}
      <div className="flex justify-between items-center pb-4 pt-4 w-full">
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
        {data && (
          <div className="mx-8 flex items-center">
            <div>
              {data.weather[0] && (
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt="index"
                />
              )}
            </div>
            <div className="ml-2 whitespace-nowrap mr-1">
              {Math.round(data.temp)}
              <sup>o</sup>C
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-1">|</span>
              {(Math.round(data.temp) * 9) / 5 + 32}
              <sup>o</sup>F
            </div>
          </div>
        )}
        <div className="ml-8">
          <ul className="flex justify-between ">
            <li className="text-stone-500 text-sm">
              <Link href={`/${data.pid}#about`}>
                <a>Бидний тухай</a>
              </Link>
            </li>
            <li className="text-stone-500 text-sm">
              <Link href={`/${data.pid}#service`}>
                <a>Үйлчилгээ</a>
              </Link>
            </li>
            <li className="text-stone-500 text-sm">
              <Link href="/">
                <a>Түгээмэл асуултууд</a>
              </Link>
            </li>
            <li className="text-stone-500 text-sm">
              <Link href="/">
                <a>Бодлого</a>
              </Link>
            </li>
            <li className="text-stone-500 text-sm">
              <Link href={`/${data.pid}#contact`}>
                <a>Холбоо барих</a>
              </Link>
            </li>
          </ul>
          <i className="mt-2 text-sm">
            &#169; 2021 <i className="text_color">Корпорэйт Зочид Буудал </i> -
            Бүр эрх хуулиар хамгаалагдсан. Хийсэн{" "}
            <i className="text_color">Амаржаргал</i>
          </i>
        </div>
      </div>
    </div>
  );
}
