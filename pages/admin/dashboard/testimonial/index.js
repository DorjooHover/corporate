import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Testimonial() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pid = parseInt(router.query.pid);

    let res = await axios.post(`/api/testimonial`, {
      params: {
        name,
        comment,
        pid,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setComment("");
    setName("");
  };

  return (
    <>
      <Head>
        <title>Сэтгэгдэл</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        <Sidebar pid={parseInt(router.query.pid)} />
        <div className="dashboard py-10">
          <div className="mb-6 w-96 ml-10">
            <h2 className="text-2xl font-semibold">Сэтгэгдэл</h2>
          </div>
          <form action="" onSubmit={handleSubmit} className="w-96 ml-10">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="font-medium mb-3 text-xl">
                Нэр
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                className="rounded-md px-2 py-1 border border-gray-800"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="comment" className="mb-3 text-xl font-medium">
                Сэтгэгдэл
              </label>
              <textarea
                name="comment"
                id="comment"
                cols="20"
                rows="5"
                value={comment}
                className="rounded-md px-2 py-1 border border-gray-800"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
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
