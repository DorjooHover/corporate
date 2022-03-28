import { ArrowForward } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { Alert } from "@mui/material";
export default function User({ data }) {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [status, setStatus] = useState(false);
  const handleUser = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.post("/api/customer", { params: { data, email } });
      setAlert(data.data.message);
      data.data.status == 1 ? setStatus(true) : setStatus(false);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md relative ">
      <h2 className="uppercase mb-2 text_color tracking-widest">
        сүүлийн үеийн мэдээ
      </h2>
      <i className="capitalize text-xl">
        enter your <b>email address</b> for our mailing list to keep your self
        update.
      </i>
      <form
        action=""
        className="absolute bottom-0 w-full"
        onSubmit={handleUser}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="px-3 py-2 border w-2/3 bg-white mt-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          type="submit"
          className="py-2 px-10 text-white w-1/3 bg_color font-semibold whitespace-nowrap"
        >
          Илгээх
          <ArrowForward sx={{ marginLeft: "5px", width: "14px" }} />
        </button>
        {status && alert && (
          <Alert severity="success" sx={{ marginTop: "1rem" }}>
            {alert}
          </Alert>
        )}
        {!status && alert && (
          <Alert severity="warning" sx={{ marginTop: "1rem" }}>
            {alert}
          </Alert>
        )}
      </form>
    </div>
  );
}
