import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Event() {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pid = parseInt(router.query.pid);

    let res = await axios.post(`/api/event`, {
      params: {
        title,
        place,
        date,
        pid,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setPlace("");
    setDate("");
    setTitle("");
  };

  return (
    <>
      <Head>
        <title>Арга хэмжээ</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        <Sidebar pid={parseInt(router.query.pid)} />
        <div className="dashboard py-10">
          <div className="mb-6 w-96 ml-10">
            <h2 className="text-2xl font-semibold">Арга хэмжээ</h2>
          </div>
          <form action="" onSubmit={handleSubmit} className="w-96 ml-10">
            <div className="flex flex-col mb-4">
              <label htmlFor="title" className="font-medium mb-3 text-xl">
                Гарчиг
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                className="rounded-md px-2 py-1 border border-gray-800"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="place" className="font-medium mb-3 text-xl">
                Газар
              </label>
              <input
                type="text"
                name="place"
                id="place"
                value={place}
                className="rounded-md px-2 py-1 border border-gray-800"
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="date" className="font-medium mb-3 text-xl">
                Огноо
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                className="rounded-md px-2 py-1 border border-gray-800"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            
            <input
              type="submit"
              value="Нийтлэх"
              className="rounded-full bg_dark cursor-pointer py-2 px-4 text-white font-semibold"
            />
          </form>
        </div>
      </div>
    </>
  );
}
