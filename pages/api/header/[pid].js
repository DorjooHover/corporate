import { deleteHeader, getHeader } from "../../../controller/header/header";
import nc from "next-connect";

const handler = nc();
handler.delete(deleteHeader);
handler.get(getHeader);
export default handler;
