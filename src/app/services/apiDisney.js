const { default: axios } = require("axios");

const apiDisney = axios.create({
    baseURL: 'https://api.disneyapi.dev'
})

export default apiDisney

// apiDisney.defaults.baseURL = 'https://api.disneyapi.dev/character'