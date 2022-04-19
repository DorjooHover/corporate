import Login from "./login";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Admin() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Админ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col pt-24 w-screen h-screen bg ">
        <button
          onClick={() =>
            router.push({ pathname: "/admin/login", query: { pid: 4 } })
          }
          className="py-4 text-white rounded-full text-2xl"
        >
          The Corporate Hotel and Convention Centre
        </button>
        <button
          onClick={() => router.push("/admin/login", { params: { pid: 5 } })}
          className="py-4 text-white rounded-full text-2xl"
        >
          The Corporate Hotel Ulaanbaatar
        </button>
        <button
          onClick={() => router.push("/admin/login", { params: { pid: 6 } })}
          className="py-4 text-white rounded-full text-2xl"
        >
          The Corporate Hotel & Resort Nukht
        </button>
        <button
          onClick={() => router.push("/admin/login", { params: { pid: 7 } })}
          className="py-4 text-white rounded-full text-2xl"
        >
          The Corporate at Zaisan
        </button>
      </div>
    </>
  );
}
