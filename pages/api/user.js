export default async function handler(req, res) {
    const USER_API_BASE_URL = "http://192.168.0.180:8080/api/v1/users";

    try {
        const response = await fetch(USER_API_BASE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "X-API-KEY": "my-secret-api-key" // Keep the API key here
            }
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
}
