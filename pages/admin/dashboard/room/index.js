import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Pagination, Box } from "@mui/material";
export default function Room() {
  const [image, setImage] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [room, setRoom] = useState({ price: 0, name: "", area: 0, type: "" });
  const router = useRouter();
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState();
  const [page, setPage] = useState(1);
  const [isCreate, setIsCreate] = useState(true);
  const [updateId, setUpdateId] = useState();
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
    let res = await axios.post(`/api/room`, {
      params: {
        image: image,
        name: room.name,
        price: room.price,
        area: room.area,
        type: room.type,
        pid: pid,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setRoom((room) => ({ ...room, name: "" }));
    setRoom((room) => ({ ...room, price: 0 }));
    setRoom((room) => ({ ...room, area: 0 }));
    setRoom((room) => ({ ...room, type: "" }));
  };
  const handleSetSubmit = async (e) => {
    e.preventDefault();
    await sendFile();
    let res = await axios.put(`/api/room`, {
      params: {
        image: image,
        name: room.name,
        price: room.price,
        area: room.area,
        type: room.type,
        updateId: updateId,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setRoom((room) => ({ ...room, name: "" }));
    setRoom((room) => ({ ...room, price: 0 }));
    setRoom((room) => ({ ...room, area: 0 }));
    setRoom((room) => ({ ...room, type: "" }));
  };
  const setEdit = (d) => {
    setIsCreate(false);
    setUpdateId(d.room_id);
    setRoom((room) => ({
      ...room,
      name: d.name,
      price: d.price,
      area: d.area,
      type: d.type,
    }));
  };
  useEffect(() => {
    fetch(`/api/room/${router.query.pid}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setPerPage(Math.ceil(data.length / 5));
      });
  }, []);

  const handleDelete = async (id) => {
    const roomData = await axios.delete(`/api/room/${id}`);
  };
  return (
    <>
      <Head>
        <title>Өрөө</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        {router.query.pid && <Sidebar pid={parseInt(router.query.pid)} />}
        <div className="dashboard py-10 flex justify-between">
          {isCreate && (
            <div>
              <div className="mb-6 w-96 ml-10">
                <h2 className="text-2xl font-semibold">Өрөө</h2>
              </div>
              <form action="" onSubmit={handleSubmit} className="w-96 ml-10">
                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="font-medium mb-3 text-xl">
                    Нэршил
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={room.name}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, name: e.target.value }))
                    }
                  />
                </div>
                <div className="flex mb-4 items-center">
                  <label htmlFor="price" className="font-medium  text-xl mr-2">
                    Үнэ :
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={room.price}
                    className="rounded-md px-2 py-1 w-40 border border-gray-800 mr-2"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, price: e.target.value }))
                    }
                  />
                  <p> ₮ / per night</p>
                </div>
                <div className="flex mb-4 items-center">
                  <label htmlFor="area" className="font-medium text-xl mr-2">
                    Талбай :
                  </label>
                  <input
                    type="number"
                    name="area"
                    id="area"
                    value={room.area}
                    className="rounded-md px-2 py-1 mr-2 w-32 border border-gray-800"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, area: e.target.value }))
                    }
                  />
                  <p className="font-medium text-xl">
                    м<sup>2</sup>
                  </p>
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="type" className="font-medium mb-3 text-xl">
                    Төрөл
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    value={room.type}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, type: e.target.value }))
                    }
                  />
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
                <h2 className="text-2xl font-semibold">Өрөө</h2>
              </div>
              <form action="" onSubmit={handleSetSubmit} className="w-96 ml-10">
                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="font-medium mb-3 text-xl">
                    Нэршил
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={room.name}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, name: e.target.value }))
                    }
                  />
                </div>
                <div className="flex mb-4 items-center">
                  <label htmlFor="price" className="font-medium  text-xl mr-2">
                    Үнэ :
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={room.price}
                    className="rounded-md px-2 py-1 w-40 border border-gray-800 mr-2"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, price: e.target.value }))
                    }
                  />
                  <p> ₮ / per night</p>
                </div>
                <div className="flex mb-4 items-center">
                  <label htmlFor="area" className="font-medium text-xl mr-2">
                    Талбай :
                  </label>
                  <input
                    type="number"
                    name="area"
                    id="area"
                    value={room.area}
                    className="rounded-md px-2 py-1 mr-2 w-32 border border-gray-800"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, area: e.target.value }))
                    }
                  />
                  <p className="font-medium text-xl">
                    м<sup>2</sup>
                  </p>
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="type" className="font-medium mb-3 text-xl">
                    Төрөл
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    value={room.type}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setRoom((room) => ({ ...room, type: e.target.value }))
                    }
                  />
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
                          key={d.header_id}
                        >
                          <div className="flex items-center">
                            <div className="mr-6 w-20 rounded-full overflow-hidden">
                              <img src={d.img} alt="img" />
                            </div>
                            <h2 className="text-xl font-medium">{d.title}</h2>
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
                              onClick={() => handleDelete(d.header_id)}
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
