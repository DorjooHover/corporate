import { executeQuery } from "../../config/db";
const getAllData = async (req, res) => {

  try {
    const placeData = await executeQuery(
      `
     select * from place
     where place_id = ?
     `,
      [req.query.pid]
    );
    let headerData = await executeQuery(
      `
    select * from place_headers ph
    inner join header h on h.header_id = ph.header_id
    where ph.place_id = ? 
    `,
      [req.query.pid]
    );

    let roomData = await executeQuery(
      `
          select * from place_rooms pr
inner join room r on pr.room_id = r.room_id
where pr.place_id = ? 
          `,

      [req.query.pid]
    );

    let serviceData = await executeQuery(
      `
          select * from place_services ps
inner join service s on ps.service_id = s.service_id
where ps.place_id = ?
          `,

      [req.query.pid]
    );
    let testimonialData = await executeQuery(
      `
          select * from place_testimonials pt
inner join testimonial t on pt.testimonial_id = t.testimonial_id
where place_id = ?
          `,
      [req.query.pid]
    );

    let eventData = await executeQuery(
      `
          select * from place_events pe
inner join event e on pe.event_id = e.event_id
where place_id = ?
          `,
      [req.query.pid]
    );
    res.status(200).json({
      headerData: headerData,
      roomData: roomData,
      serviceData: serviceData,
      testimonialData: testimonialData,
      eventData: eventData,
      placeData: placeData,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getAllData };
