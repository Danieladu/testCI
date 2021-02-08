const axios = require('axios');

async function getResponse() {
    const endpoint = `http://localhost:3001/api/get`;
    const response = await axios.default({
        url: endpoint,
        method: "GET",
    });
    console.log(response.data);
}

getResponse();