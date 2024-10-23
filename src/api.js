

export const fetchApodImages = async (count = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&count=${count}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching APOD data:', error);
        return [];
    }
};