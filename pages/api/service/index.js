import nc from 'next-connect';
import {createService} from '../../../controller/service/service';

const handler = nc();
handler.post(createService);

export default handler;