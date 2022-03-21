import nc from "next-connect";
import { createRoom } from "../../../controller/room/room";

const handler = nc();

handler.post(createRoom);

export default handler;
