import nc from "next-connect";
import { createEvent } from "../../../controller/event/event";

const handler = nc();
handler.post(createEvent);

export default handler;
