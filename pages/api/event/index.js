import nc from "next-connect";
import { createEvent, getAllEvent } from "../../../controller/event/event";

const handler = nc();
handler.post(createEvent);
handler.get(getAllEvent)
export default handler;
