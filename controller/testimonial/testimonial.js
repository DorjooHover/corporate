import { executeQuery } from "../../config/db";

const createTestimonial = async (req, res) => {
  const { name, comment, pid } = req.body.params;
  try {
    let testimonialData = await executeQuery(
      `
        insert into testimonial(name, comment)
        values(?, ?)
        `,
      [name, comment]
    );

    let testimonialPlaceData = await executeQuery(
      `
        insert into place_testimonials(place_id, testimonial_id)
        values(?, ?)
        `,
      [pid, testimonialData.insertId]
    );
    res.send(testimonialData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export { createTestimonial };
