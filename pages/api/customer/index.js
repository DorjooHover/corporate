import nc from "next-connect";
import { createCustomer } from "../../../controller/customer/customer";

const handler = nc();
handler.post(createCustomer);

export default handler;
