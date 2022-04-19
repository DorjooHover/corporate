import Head from "next/head";
import Sidebar from "../../../../src/components/admin/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Pagination, Box } from "@mui/material";
export default function Testimonial() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const router = useRouter();
  const [isCreate, setIsCreate] = useState(true);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState();
  const [page, setPage] = useState(1);
  const [updateId, setUpdateId] = useState();
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

  const handleSetSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`/api/testimonial`, {
      params: {
        name,
        comment,
        updateId,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setComment("");
    setName("");
  };

  const handleDelete = async (id) => {
    const testimonialData = await axios.delete(`/api/testimonial/${id}`);
  };

  const setEdit = (d) => {
    setIsCreate(false);
    setComment(d.comment);
    setName(d.name);
    setUpdateId(d.testimonial_id);
  };
  useEffect(() => {
    fetch(`/api/testimonial/${router.query.pid}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setPerPage(Math.ceil(data.length / 5));
      });
  }, []);
  return (
    <>
      <Head>
        <title>Сэтгэгдэл</title>
      </Head>
      <div className="flex absolute inset-0 h-screen w-screen">
        {router.query.pid && <Sidebar pid={parseInt(router.query.pid)} />}
        <div className="dashboard py-10 flex justify-between">
          {isCreate && (
            <div>
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
          )}
          {!isCreate && (
            <div>
              <div className="mb-6 w-96 ml-10">
                <h2 className="text-2xl font-semibold">Сэтгэгдэл</h2>
              </div>
              <form action="" onSubmit={handleSetSubmit} className="w-96 ml-10">
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
                          key={d.testimonial_id}
                        >
                          <div className="flex items-center">
                            <h2 className="text-xl font-medium">{d.name}</h2>
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
                              onClick={() => handleDelete(d.testimonial_id)}
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
