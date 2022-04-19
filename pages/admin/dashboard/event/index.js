import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Pagination } from "@mui/material";
export default function Event() {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();
  const [isCreate, setIsCreate] = useState(true);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState();
  const [page, setPage] = useState(1);
  const [updateId, setUpdateId] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pid = parseInt(router.query.pid);
    let res = await axios.post(`/api/event`, {
      params: {
        title: title,
        place: place,
        day: date.substring(8, 10),
        month: date.substring(5, 7),
        pid: pid,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setPlace("");
    setDate("");
    setTitle("");
  };

  useEffect(() => {
    fetch(`/api/event/${router.query.pid}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // setLoading(false)
        setPerPage(Math.ceil(data.length) / 5);
      });
  }, []);
  const setEdit = (d) => {
    setIsCreate(false);
    setTitle(d.title);
    setPlace(d.place);
    setUpdateId(d.event_id);
  };

  const handleSetSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.put(`/api/event`, {
      params: {
        title: title,
        place: place,
        day: date.substring(8, 10),
        month: date.substring(5, 7),
        updateId: updateId,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    setPlace("");
    setDate("");
    setTitle("");
  };

  const handleDelete = async (id) => {
    const eventData = await axios.delete(`/api/event/${id}`);
    console.log(eventData);
  };
  return (
    <>
      <Head>
        <title>Арга хэмжээ</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        {router.query.pid && <Sidebar pid={parseInt(router.query.pid)} />}
        <div className="dashboard py-10 flex justify-between">
          {isCreate && (
            <div>
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
          )}
          {!isCreate && (
            <div>
              <div className="mb-6 w-96 ml-10">
                <h2 className="text-2xl font-semibold">Арга хэмжээ</h2>
              </div>
              <form action="" onSubmit={handleSetSubmit} className="w-96 ml-10">
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
                  value="Солих"
                  className="rounded-full bg_dark cursor-pointer py-2 px-4 text-white font-semibold"
                />
              </form>
            </div>
          )}

          <div className="w-full mt-14">
            <div className="ml-10 mr-10">
              {data.map((d, index) => {
                if (index < page * 5 && index >= (page - 1) * 5) {
                  return (
                    <>
                      <div
                        className="flex justify-between my-2"
                        key={d.header_id}
                      >
                        <div className="flex items-center">
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
                            onClick={() => handleDelete(d.event_id)}
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
