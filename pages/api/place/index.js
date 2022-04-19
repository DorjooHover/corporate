import nc from "next-connect";
import { getAllPlace } from "../../../controller/place/place";

const handler = nc();
handler.get(getAllPlace);

export default handler;
