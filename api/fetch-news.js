
export default async function handler(req, res) {
    const { query } = req.query;
  
    if (!query) {
      return res.status(400).json({ error: 'Missing query parameter' });
    }
  
    try {
      const API_KEY = "a870c52cd08d4a75bd3119d39433d18a";
      const url = `https://newsapi.org/v2/everything?q=${query}&apikey=${API_KEY}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  }
  