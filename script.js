async function fetchNews(query) {
    try {
        const res = await fetch(`/api/fetch-news?query=${query}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        bindData(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
