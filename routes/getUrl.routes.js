import express from 'express';
import { getURLByShortId , getAnalytics } from '../controllers/getUrl.controllers.js';

const router = express.Router();

router.get('/:shortId',getURLByShortId);
router.get('/analytics/:shortId',getAnalytics);
export default router;