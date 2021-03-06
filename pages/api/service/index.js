import nc from "next-connect";
import {
  createService,
  updateService,
} from "../../../controller/service/service";

const handler = nc();
handler.post(createService);
handler.put(updateService);
export default handler;
