import { executeQuery } from "../../config/db";

const getAllEvent = async (req, res) => {
  try {
    const eventData = await executeQuery(
      `
        select * from place_events pe
        inner join event e on e.event_id = pe.event_id
        where place_id = ?
        `,
      [req.query.pid]
    );
    res.send(eventData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createEvent = async (req, res) => {
  const { day, month, place, title, pid } = req.body.params;
  try {
    let eventData = await executeQuery(
      `
        insert into event(day, month, place, title)
        values(?, ?, ?, ?)
        `,
      [day, month, place, title]
    );
    let eventPlaceData = await executeQuery(
      `
        insert into place_events(place_id, event_id)
        values(?, ?)
        `,
      [pid, eventData.insertId]
    );
    res.send(eventData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateEvent = async (req, res) => {
  const { day, month, place, title, updateId } = req.body.params;
  try {
    const eventData = await executeQuery(
      `
        update event set day = ?, month = ?, place = ?, title = ? 
        where event_id = ?
        `,
      [day, month, place, title, updateId]
    );
    res.send(eventData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await executeQuery(
      `
        delete from place_events 
        where header_id = ?
        `,
      [req.query.pid]
    );
    deletedEvent
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
export { getAllEvent, createEvent, updateEvent, deleteEvent };
