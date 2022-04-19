import nc from "next-connect";
<<<<<<< HEAD
import { createEvent, updateEvent } from "../../../controller/event/event";

const handler = nc();
handler.post(createEvent);

handler.put(updateEvent);
=======
import { createEvent, getAllEvent } from "../../../controller/event/event";

const handler = nc();
handler.post(createEvent);
handler.get(getAllEvent)
>>>>>>> 8abf87b33f067f61145fccf3363de479a3a119b5
export default handler;
