import nc from 'next-connect'
import {deleteEvent, getEvent, updateEvent} from '../../controller/event/event'

const handler = nc()
handler.get(getEvent)
handler.patch(updateEvent)
handler.delete(deleteEvent)

export default handler