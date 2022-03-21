import {executeQuery} from '../../config/db'

const createRoom = async (req, res) => {

    let {price, name, image, area, type, pid} = req.body.params;
    try {
        let roomData = await executeQuery(`
        insert into room(price, name, img, area, type)
        values(?, ?, ?, ?, ?)
        `,[price, name, image, area, type])
        let roomPlaceData = await executeQuery(
            `
            insert into place_rooms(place_id, room_id)
            values(?, ?)
          `,
            [pid, roomData.insertId]
          );
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export {createRoom}