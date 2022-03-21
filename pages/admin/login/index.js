import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState([]);
  const [alert, setAlert] = useState("");
  const router = useRouter();
  const loadAdmin = async () => {
    try {
      let resAdmin = await axios.get(`/api/admin`, {
        params: { username: name },
      });
      setAdmin(resAdmin.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAdmin = (e) => {
    e.preventDefault();
    loadAdmin();

    admin[0] !== undefined && admin[0].password == password
      ? router.push({
          pathname: "/admin/dashboard",
          query: { pid: admin[0].place_id },
        })
      : setAlert("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
  };
  return (
    <>
      <Head>
        <title>Нэвтрэх</title>
      </Head>
      <div className="bg h-screen w-screen absolute inset-0">
        <form action="" className="admin" onSubmit={handleAdmin}>
          {alert && (
            <Alert severity="error" className="mb-4">
              {alert}
            </Alert>
          )}
          <div className="flex flex-col mb-3">
            <label
              htmlFor="name"
              className="mb-4 text-xl text-white  font-medium"
            >
              Нэвтрэх нэр
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Нэвтрэх нэр"
              className="px-2 py-1 rounded-md"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col  ">
            <label
              htmlFor="password"
              className="mb-4 text-xl text-white font-medium"
            >
              Нууц үг
            </label>
            <input
              type="password"
              name="password"
              className="px-2 py-1 rounded-md mb-4"
              id="password"
              placeholder="Нууц үг"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Нэвтрэх"
            className="w-full text-white py-3 cursor-pointer px-4 rounded-full bg_dark text-xl font-medium "
          />
        </form>
      </div>
    </>
  );
}
