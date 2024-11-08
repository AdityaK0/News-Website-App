import fetch from 'node-fetch';

export default async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Missing query parameter' });
    }

    try {
        const API_KEY = process.env.NEWS_API_KEY; 
        const url = `https://newsapi.org/v2/everything?q=${query}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
};
