import nc from "next-connect";
import { createHeader } from "../../../controller/header/header";

const handler = nc();
handler.post(createHeader);

export default handler;
