import { executeQuery } from "../../config/db";

const createEvent = async (req, res) => {
     const { date, place, title, pid } = req.body.params;
     try {
          let eventData = await executeQuery(
               `
        insert into event(data, place, title)
        values(?, ?, ?)
        `,
               [date, place, title]
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

const getAllEvent = async (req, res) => {
     const { pid } = req.body.params;
     try {
          let eventData = await executeQuery(
               `
            select * from place_events pe
            inner join event e on e.event_id = pe.event_id
            where place_id = ?
        `,
               [pid]
          );
          res.send(eventData);
     } catch (error) {
          res.status(500).json({ message: error });
     }
};

const getEvent = async (req, res) => {
     const {pid, id} = req.body.params
     try {
          let eventData = await executeQuery(`
          select * from place_events pe
          inner join event e on e.event_id = pe.event_id
          where place_id = ? and pe.event_id
          `, [pid, id])
          res.send(eventData)
     } catch (error) {
          res.status(500).json({message: error})
     }
}
const deleteEvent = async (req, res) => {
     const {pid, id} = req.body.params;
     try {
          let eventData = await executeQuery(`
          delete from place_events 
          where place_id = ? and place_event_id = ?
          `, [pid, id])
     } catch (error) {
          res.status(500).json({message: error})
     }

}

const updateEvent = async (req, res) => {
     const {pid, id, place, title, day, month  } = req.body.params
     try {
          let eventData = await executeQuery(`
          update place_events pe inner join event e on e.event_id = pe.event_id
set place = ? , title = ? , day = ? ,month = ?
where pe.event_id = ? and place_id = ?
          `, [place, title, day , month, id, pid])
     } catch (error) {
          res.status(500).json({message: error})
     }
}

export { createEvent, getAllEvent, deleteEvent, updateEvent, getEvent };
