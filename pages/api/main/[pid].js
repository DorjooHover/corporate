import nc from "next-connect";
import { getAllData } from "../../../controller/main/main";

const handler = nc();

handler.get(getAllData);

export default handler;
