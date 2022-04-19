import nc from "next-connect";
import { createHeader, updateHeader } from "../../../controller/header/header";

const handler = nc();
handler.post(createHeader);

handler.put(updateHeader)
export default handler;
