import nc from "next-connect";
import { createHeader, getHeader } from "../../../controller/header/header";

const handler = nc();
handler.post(createHeader);
handler.get(getHeader);

export default handler;
