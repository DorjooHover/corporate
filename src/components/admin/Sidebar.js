import {
  FirstPage,
  MeetingRoom,
  EventAvailable,
  Comment,
  SettingsSystemDaydream,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ pid }) {
  return (
    <div className="flex-1 bg_main h-screen">
      <div className="w-10/12 mx-auto my-10">
        <div className="mb-4">
          <Image
            src={"/img/logo.png"}
            alt="logo"
            height={286}
            width={400}
            layout="responsive"
          />
        </div>
        <ul>
          <li className="flex items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/header",
                query: { pid: pid },
              }}
            >
              <a className="mb-4 text-white font-semibold flex items-center">
                <FirstPage className="mr-2" />
                Нүүр
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/room",
                query: { pid: pid },
              }}
            >
              <a className="mb-4 text-white font-semibold flex items-center">
                <MeetingRoom className="mr-2" />
                Өрөө
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/service",
                query: { pid: pid },
              }}
            >
              <a className="mb-4 text-white font-semibold flex items-center">
                <SettingsSystemDaydream className="mr-2" />
                Үйлчилгээ
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/testimonial",
                query: { pid: pid },
              }}
            >
              <a className="mb-4 text-white font-semibold flex items-center">
                <Comment className="mr-2" />
                Сэтгэгдэл
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/event",
                query: { pid: pid },
              }}
            >
              <a className="mb-4 text-white font-semibold flex items-center">
                <EventAvailable className="mr-2" />
                Арга хэмжээ
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
