import nc from "next-connect";
import { deleteEvent, getAllEvent } from "../../../controller/event/event";

const handler = nc();
handler.get(getAllEvent);
handler.delete(deleteEvent);
export default handler;
