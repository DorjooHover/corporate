import { executeQuery } from "../../config/db";

const getAllRoom = async (req, res) => {
  try {
    const roomData = await executeQuery(
      `
    select * from place_rooms pr
    inner join room r on r.room_id = pr.room_id
    where place_id = ?

    `,
      [req.query.pid]
    );
    res.send(roomData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createRoom = async (req, res) => {
  let { price, name, image, area, type, pid } = req.body.params;
  try {
    let roomData = await executeQuery(
      `
        insert into room(price, name, img, area, type)
        values(?, ?, ?, ?, ?)
        `,
      [price, name, image, area, type]
    );
    let roomPlaceData = await executeQuery(
      `
            insert into place_rooms(place_id, room_id)
            values(?, ?)
          `,
      [pid, roomData.insertId]
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateRoom = async (req, res) => {
  const { price, name, image, area, type, updateId } = req.body.params;

  try {
    const roomData = await executeQuery(
      `
    update room set price = ?, name = ? , img = ?, area =? , type = ?
    where room_id = ?
    `,
      [price, name, image, area, type, updateId]
    );
    res.send(roomData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const deletedData = await executeQuery(
      `
    delete from place_rooms
    where room_id = ?
    `,
      [req.query.pid]
    );
    deletedData
      ? await executeQuery(
          `
    delete from room 
    where room_id = ?
    `,
          [req.query.pid]
        )
      : null;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export { createRoom, getAllRoom, deleteRoom, updateRoom };
