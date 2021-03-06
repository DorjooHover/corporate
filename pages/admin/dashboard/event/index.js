import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Pagination } from "@mui/material";
export default function Event() {
  const [event, setEvent] = useState({
    place: "",
    title: "",
    day: "",
    month: "",
  });
  const router = useRouter();
  const [isCreate, setIsCreate] = useState(true);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState();
  const [page, setPage] = useState(1);
  const [updateId, setUpdateId] = useState();

  const loadEvent = async (req, res) => {
    try {
      let eventData = await axios.get("/api/event", { params: { pid } });
      setEvent((event) => ({
        ...event,
        place: eventData.data.place,
        title: eventData.data.title,
        day: eventData.data.day,
        month: eventData.data.month,
      }));
      // setEvent((event) => ({...event, title: eventData.data.title}))
      // setEvent((event) => ({...event, day: eventData.data.day}))
      // setEvent((event) => ({...event, month: eventData.data.month}))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadEvent();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

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
    setEvent((event) => ({
      ...event,
      place: "",
      title: "",
      day: "",
      month: "",
    }));
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
    setEvent((event) => ({
      ...event,
      place: "",
      title: "",
      day: "",
      month: "",
    }));
  };

  const handleDelete = async (id) => {
    const eventData = await axios.delete(`/api/event/${id}`);
    console.log(eventData);
  };
  return (
    <>
      <Head>
        <title>???????? ????????????</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        {router.query.pid && <Sidebar pid={parseInt(router.query.pid)} />}
        <div className="dashboard py-10 flex justify-between">
          {isCreate && (
            <div>
              <div className="mb-6 w-96 ml-10">
                <h2 className="text-2xl font-semibold">???????? ????????????</h2>
              </div>
              <form action="" onSubmit={handleSubmit} className="w-96 ml-10">
                <div className="flex flex-col mb-4">
                  <label htmlFor="title" className="font-medium mb-3 text-xl">
                    ????????????
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={event.title}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, title: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="place" className="font-medium mb-3 text-xl">
                    ??????????
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    value={event.place}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, place: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="date" className="font-medium mb-3 text-xl">
                    ????????
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={event.day}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, day: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="date" className="font-medium mb-3 text-xl">
                    ??????
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={event.month}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, month: e.target.value }))
                    }
                  />
                </div>

                <input
                  type="submit"
                  value="??????????????"
                  className="rounded-full bg_dark cursor-pointer py-2 px-4 text-white font-semibold"
                />
              </form>
            </div>
          )}
          {!isCreate && (
            <div>
              <div className="mb-6 w-96 ml-10">
                <h2 className="text-2xl font-semibold">???????? ????????????</h2>
              </div>
              <form action="" onSubmit={handleSetSubmit} className="w-96 ml-10">
                <div className="flex flex-col mb-4">
                  <label htmlFor="title" className="font-medium mb-3 text-xl">
                    ????????????
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={event.title}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, title: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="place" className="font-medium mb-3 text-xl">
                    ??????????
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    value={event.place}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, place: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="date" className="font-medium mb-3 text-xl">
                    ????????
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={event.day}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, day: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="date" className="font-medium mb-3 text-xl">
                    ??????
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={event.month}
                    className="rounded-md px-2 py-1 border border-gray-800"
                    onChange={(e) =>
                      setEvent((event) => ({ ...event, month: e.target.value }))
                    }
                  />
                </div>

                <input
                  type="submit"
                  value="??????????"
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
