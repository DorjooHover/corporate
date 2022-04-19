import nc from "next-connect";
import { createEvent, updateEvent } from "../../../controller/event/event";

const handler = nc();
handler.post(createEvent);

handler.put(updateEvent);

export default handler;
