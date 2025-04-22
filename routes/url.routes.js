import express from 'express';
import handleGenerateNewShortURL from '../controllers/url.controllers.js';

const router = express.Router();

router.post('/', handleGenerateNewShortURL);
export default router;