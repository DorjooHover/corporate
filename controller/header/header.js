import { executeQuery } from "../../config/db";

const createHeader = async (req, res) => {
  let { title, description, image, pid } = req.body.params;
  try {
    let headerData = await executeQuery(
      `
        insert into header (img, title, description)
        values(?, ?, ?)
        `,
      [image, title, description]
    );
    let headerPlaceData = await executeQuery(
      `
      insert into place_headers(place_id, header_id)
      values(?, ?)
    `,
      [pid, headerData.insertId]
    );
    res.send(headerData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { createHeader };
