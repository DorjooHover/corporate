import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Pagination, Box } from "@mui/material";
export default function Service() {
  const [image, setImage] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [isCreate, setIsCreate] = useState(true);
  const [updateId, setUpdateId] = useState();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState();
  const [title2, setTitle2] = useState("");
  async function sendFile() {
    const data = new FormData();
    data.append("file", imageSrc);
    data.append("upload_preset", "corporate");
    data.append("cloud_name", "medk");
    await fetch("https://api.cloudinary.com/v1_1/medk/image/upload", {
      method: "POST",
      body: data,
    })
      .then((r) => r.json())
      .then((data) => {
        setImage(data.secure_url);
      });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 7000);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pid = parseInt(router.query.pid);
    await sendFile();
    let res = await axios.post(`/api/service`, {
      params: {
        image,
        title,
        description,
        pid,
        title2,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setTitle("");
    setTitle2("");
    setDescription("");
  };
  const handleSetSubmit = async (e) => {
    e.preventDefault();
    await sendFile();
    let res = await axios.put(`/api/service`, {
      params: {
        image,
        title,
        description,
        updateId,
        title2,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setTitle("");
    setTitle2("");
    setDescription("");
  };

  useEffect(() => {
    fetch(`/api/service/${router.query.pid}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setPerPage(Math.ceil(data.length / 5));
      });
  });
  const setEdit = (d) => {
    setIsCreate(false);
    setUpdateId(d.service_id);
    setTitle(d.title);
    setTitle2(d.title_1);
    setDescription(d.description);
  };

  const handleDelete = async (id) => {
    const serviceData = await axios.delete(`/api/service/${id}`);
  };

  return (
    <>
      <Head>
        <title>Үйлчилгээ</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        {router.query.pid && <Sidebar pid={parseInt(router.query.pid)} />}
        <div className="dashboard py-10 flex justify-between">
          {isCreate && (
            <div>
              <div className="mb-6 w-96 ml-10">
                <h2 className="text-2xl font-semibold">Үйлчилгээ</h2>
              </div>
              <form action="" onSubmit={handleSubmit} className="w-96 ml-10">
                <div className="flex flex-col mb-4">
                  <label htmlFor="title" className="font-medium mb-3 text-xl">
                    Гарчиг 1
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
                  <label htmlFor="title" className="font-medium mb-3 text-xl">
                    Гарчиг 2
                  </label>
                  <input
                    type="text"
                    name="title_1"
                    id="title_1"
                    value={title2}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) => setTitle2(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="description"
                    className="mb-3 text-xl font-medium"
                  >
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
                    onChange={(e) => setImageSrc(e.target.files[0])}
                  />
                </div>
                <input
                  type="submit"
                  value="Нийтлэх"
                  className="rounded-full bg_dark cursor-pointer py-2 px-4 text-white font-semibold"
                />
              </form>
            </div>
          )}
          {!isCreate && (
            <div>
              <div className="mb-6 w-96 ml-10">
                <h2 className="text-2xl font-semibold">Үйлчилгээ</h2>
              </div>
              <form action="" onSubmit={handleSetSubmit} className="w-96 ml-10">
                <div className="flex flex-col mb-4">
                  <label htmlFor="title" className="font-medium mb-3 text-xl">
                    Гарчиг 1
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
                  <label htmlFor="title" className="font-medium mb-3 text-xl">
                    Гарчиг 2
                  </label>
                  <input
                    type="text"
                    name="title_1"
                    id="title_1"
                    value={title2}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) => setTitle2(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="description"
                    className="mb-3 text-xl font-medium"
                  >
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
                    onChange={(e) => setImageSrc(e.target.files[0])}
                  />
                </div>
                <input
                  type="submit"
                  value="Солих"
                  className="rounded-full bg_dark cursor-pointer py-2 px-4 text-white font-semibold"
                />
              </form>
            </div>
          )}
          <div className="w-full mt-14">
            <div className="ml-10 mr-10">
              {data &&
                data.map((d, index) => {
                  if (index < page * 5 && index >= (page - 1) * 5) {
                    return (
                      <>
                        <div
                          className="flex justify-between my-2"
                          key={d.service_id}
                        >
                          <div className="flex items-center">
                            <div className="mr-6 w-20 rounded-full overflow-hidden">
                              <img src={d.img} alt="img" />
                            </div>
                            <h2 className="text-xl font-medium">
                              {d.title} & {d.title_1}
                            </h2>
                          </div>
                          <div className="flex items-center">
                            <button
                              className="py-2 px-5 rounded-full bg-sky-900 text-white mr-6 font-semibold"
                              onClick={() => setEdit(d)}
                            >
                              Edit
                            </button>
                            <button
                              className="py-2 px-5 rounded-full bg-red-800 text-white mr-6 font-semibold"
                              onClick={() => handleDelete(d.service_id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
            </div>
            <Box py={3} display="flex" justifyContent="center">
              <Pagination
                count={perPage}
                color="secondary"
                variant="outline"
                onChange={(event, value) => {
                  setPage(value);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
