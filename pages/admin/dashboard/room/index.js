import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Room() {
  const [uploadData, setUploadData] = useState();
  const [image, setImage] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [room, setRoom] = useState({ price: 0, name: "", area: 0, type: "" });
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
    setRoom((room) => ({ ...room, name: ""}));
    setRoom((room) => ({ ...room, price: 0}));
    setRoom((room) => ({ ...room, area: 0}));
    setRoom((room) => ({ ...room, type: ''}));
  };

  return (
    <>
      <Head>
        <title>Өрөө</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        <Sidebar />
        <div className="dashboard py-10">
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
