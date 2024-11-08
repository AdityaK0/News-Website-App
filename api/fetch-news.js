import fetch from 'node-fetch';

const API_KEY = "a870c52cd08d4a75bd3119d39433d18a"; 

export default async (req, res) => {
  const { query } = req.query; 

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apikey=${API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
