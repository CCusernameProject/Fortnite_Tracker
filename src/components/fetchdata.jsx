const fetchData = async (name, timeWindow = 'season') => {
    const username = name;
    const url = `https://fortnite-api.com/v2/stats/br/v2?name=${encodeURIComponent(username)}&timeWindow=${timeWindow}`;
    const headers = new Headers();
    headers.append('Authorization', '483346af-f5a6-4712-a93c-be3212c28f34');
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchData;
