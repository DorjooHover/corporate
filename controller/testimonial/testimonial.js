import { executeQuery } from "../../config/db";

const getAllTestimonial = async (req, res) => {
  try {
    const testimonialData = await executeQuery(
      `
    select * from place_testimonials pt
    inner join testimonial t on t.testimonial_id = pt.testimonial_id
    where place_id = ?
    `,
      [req.query.pid]
    );
    res.send(testimonialData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
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

const updateTestimonial = async (req, res) => {
  const { name, comment, updateId } = req.body.params;
  try {
    const testimonialData = await executeQuery(
      `
    update testimonial set name = ?, comment = ?
    where testimonial_id = ?
    `,
      [name, comment, updateId]
    );
    res.send(testimonialData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const deletedData = await executeQuery(
      `
    delete from place_testimonials
    where testimonial_id = ?
    `,
      [req.query.pid]
    );
    deletedData
      ? await executeQuery(
          `
    delete from testimonial 
    where testimonial_id = ?
    `,
          [req.query.pid]
        )
      : null;
  } catch (error) {
    re.status(500).json({ message: error });
  }
};
export {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getAllTestimonial,
};
