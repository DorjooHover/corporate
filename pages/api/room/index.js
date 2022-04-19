import nc from "next-connect";
import { createRoom, updateRoom } from "../../../controller/room/room";

const handler = nc();

handler.post(createRoom);
handler.put(updateRoom);
export default handler;
