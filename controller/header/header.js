import { executeQuery } from "../../config/db";
const getHeader = async (req, res) => {
  try {
    let headerData = await executeQuery(
      `
    select * from place_headers ph
     inner join header h on h.header_id = ph.header_id
     where place_id = ?
    `,
      [req.query.pid]
    );
    res.send(headerData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
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

const updateHeader = async (req, res) => {
  const { updateId, title, description, image } = req.body.params;
  try {
    const headerData = await executeQuery(
      `
          update header set img = ?, title =? , description = ?
          where header_id = ?
          `,
      [image, title, description, updateId]
    );
    res.send(headerData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteHeader = async (req, res) => {
  try {
    const deletedHeader = await executeQuery(
      `
          delete from place_events 
          where event_id = ?
          `,
      [req.query.pid]
    );

    deletedHeader
      ? await executeQuery(
          `
          delete from event 
          where event_id = ?
          `,
          [req.query.pid]
        )
      : null;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export { createHeader, getHeader, updateHeader, deleteHeader };
