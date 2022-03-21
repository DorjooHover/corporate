import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Header() {
  const [uploadData, setUploadData] = useState();
  const [image, setImage] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pid = parseInt(router.query.pid);
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "corporate");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/medk/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    setImage(data.secure_url);
    let res = await axios.post(`/api/header`, {
      params: {
        image,
        title,
        description,
        pid,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Head>
        <title>Нүүр</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        <Sidebar pid={parseInt(router.query.pid)}/>
        <div className="dashboard py-10">
          <div className="mb-6 w-96 ml-10">
            <h2 className="text-2xl font-semibold">Нүүр</h2>
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
              <label htmlFor="description" className="mb-3 text-xl font-medium">
                Дэлгэрэнгүй
              </label>
              <textarea
                name="description"
                id="description"
                cols="20"
                rows="5"
                value={description}
                className="rounded-md px-2 py-1 border border-gray-800"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="file" className="font-medium mb-3 text-xl ">
                Зураг оруулах
              </label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleOnChange}
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
