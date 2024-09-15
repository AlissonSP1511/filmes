const { default: axios } = require("axios");

const apiZelda = axios.create({
    baseURL: 'https://botw-compendium.herokuapp.com/api/v3/compendium'
})

export default apiZelda