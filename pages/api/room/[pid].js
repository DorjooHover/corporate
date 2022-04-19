import nc from "next-connect";
import { deleteRoom, getAllRoom } from "../../../controller/room/room";

const handler = nc();
handler.get(getAllRoom);
handler.delete(deleteRoom);

export default handler;
