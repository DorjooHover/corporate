import { executeQuery } from "../../config/db";

const getAllService = async (req, res) => {
  try {
    const serviceData = await executeQuery(
      `
    select * from place_services ps
    inner join service s on s.service_id = ps.service_id
    where place_id = ?
    `,
      [req.query.pid]
    );
    res.send(serviceData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createService = async (req, res) => {
  let { image, title, description, pid , title2} = req.body.params;
  try {
    let serviceData = await executeQuery(
      `
        insert into service (img, title, description, title_1)
        values(?, ?, ?, ?)
        `,
      [image, title, description, title2]
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

const updateService = async (req, res) => {
  const { image, title, description, updateId, title2 } = req.body.params;
  try {
    const serviceData = await executeQuery(
      `
    update service set img =? , title=?, description=?, title_1 =?
    where service_id = ?

    `,
      [image, title, description, title2, updateId]
    );
    res.send(serviceData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteService = async (req, res) => {
  try {
    const deletedData = await executeQuery(
      `
    delete from place_services
    where service_id = ?
    `,
      [req.query.pid]
    );
    deletedData
      ? await executeQuery(
          `
    delete from service 
    where service_id =? 
    `,
          [req.query.pid]
        )
      : null;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { createService, getAllService, updateService, deleteService };
