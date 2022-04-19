import nc from "next-connect";
import {
  getAllService,
  deleteService,
} from "../../../controller/service/service";
const handler = nc();
handler.get(getAllService);
handler.delete(deleteService);

export default handler;
