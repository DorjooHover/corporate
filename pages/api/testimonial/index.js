import nc from "next-connect";
import { createTestimonial } from "../../../controller/testimonial/testimonial";

const handler = nc();
handler.post(createTestimonial);

export default handler;
