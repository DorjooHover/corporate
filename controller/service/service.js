import { executeQuery } from "../../config/db";

const createService = async (req, res) => {
  let { image, title, description, pid } = req.body.params;
  try {
    let serviceData = await executeQuery(
      `
        insert into service (img, title, description)
        values(?, ?, ?)
        `,
      [image, title, description]
    );

    let servicePlaceData = await executeQuery(
      `
            insert into place_services(place_id, service_id)
            values(?, ?)
          `,
      [pid, serviceData.insertId]
    );
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export { createService };
