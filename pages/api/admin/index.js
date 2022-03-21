import { getAdmin } from "../../../controller/admin/admin";
import nc from "next-connect";

const handler = nc();

handler.get(getAdmin);

export default handler;
