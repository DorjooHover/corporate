import {executeQuery} from '../../config/db'

const createEvent = async(req, res) => {
    const {date, place, title, pid} = req.body.params
    try {
        let eventData = await executeQuery(`
        insert into event(data, place, title)
        values(?, ?, ?)
        `,[date, place, title])
        let eventPlaceData = await executeQuery(`
        insert into place_events(place_id, event_id)
        values(?, ?)
        `, [pid, eventData.insertId])
        res.send(eventData)

    } catch(err) {
        res.status(500).json({message: err})
    }
}

export {createEvent}