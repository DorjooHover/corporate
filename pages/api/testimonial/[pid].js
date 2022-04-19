import nc from "next-connect";
import {
  deleteTestimonial,
  getAllTestimonial,
} from "../../../controller/testimonial/testimonial";

const handler = nc();
handler.get(getAllTestimonial);
handler.delete(deleteTestimonial);

export default handler;
