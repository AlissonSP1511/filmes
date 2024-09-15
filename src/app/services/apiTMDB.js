const { default: axios } = require("axios");

// Substitua 'YOUR_API_KEY' pela sua chave de API do TMDB
const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/', // Adiciona a versão da API
    // params: {
    //     language: 'pt-BR'
    // },
    headers: {
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY // Adiciona a chave de API para autenticação
    }
});
export default apiTMDB;
