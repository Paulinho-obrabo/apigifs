import {Router} from 'express';
import {getGif} from '../controllers/gifsController.js';
const r=Router();
r.get('/:action/:type',getGif);
export default r;
