import express from 'express';
import getURLByShortId from '../controllers/getUrl.controllers.js';

const router = express.Router();

router.get('/:shortId',getURLByShortId);
export default router;