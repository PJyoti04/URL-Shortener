import { nanoid } from 'nanoid';
import URL from '../models/url.models.js';

export default async function handleGenerateNewShortURL(req,res) {
    const { originalURL } = req.body;
    

    if(!originalURL) return res.status(400).json({error: "URL is required"});

    const shortId = nanoid(8);

    try {
        await URL.create({
            shortId,
            redirectURL: originalURL,
            visitHistory: [],
        });
        return res.status(201).json({id: shortId});
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: "Internal Server error"});
    }
};