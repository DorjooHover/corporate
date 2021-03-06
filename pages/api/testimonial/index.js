import nc from "next-connect";
import {
  createTestimonial,
  updateTestimonial,
} from "../../../controller/testimonial/testimonial";

const handler = nc();
handler.post(createTestimonial);
handler.put(updateTestimonial);
export default handler;
