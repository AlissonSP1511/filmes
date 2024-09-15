'use client'

import Pagina from "../components/Pagina";



export default function array() {

    const carros = ["Ferrari", "BMW", "Audi", "Mercedes", "Lamborghini", "Porsche", "Bugatti", "Jaguar", "corsa", "palio"];
    const pessoas = ["ana", "pedro", "jose", "maria", "antonio", "marcos", "marco", "joao"];
    const carros2 = [
        { modelo: "ferrari", cor: "vermelho", ano: 2020, fotos: "" },
        { modelo: "bmw", cor: "branco", ano: 2019, fotos: "" },
        { modelo: "mercedes", cor: "preto", ano: 2021, fotos: "" },
        { modelo: "audi", cor: "cinza", ano: 2022, fotos: "" },
        { modelo: "lamborghini", cor: "rosa", ano: 2023, fotos: "" },
        { modelo: "porsche", cor: "amarelo", ano: 2024, fotos: "" },
        { modelo: "bugatti", cor: "rosa", ano: 2025, fotos: "" },
        { modelo: "jaguar", cor: "rosa", ano: 2026, fotos: "" },
        { modelo: "corsa", cor: "rosa", ano: 2027, fotos: "" },
        { modelo: "palio", cor: "rosa", ano: 2028, fotos: "" }
    ]

    return (
        <Pagina titulo="Pagina de Array">
            <h3>carros array</h3>
            {carros.map((item, index) => (
                <p key={index}>carros {item}</p>
            ))}
            <h3>pessoas array</h3>
            {pessoas.map((item, index) => (
                <p key={index}>pessoas {item}</p>
            ))}

            <h3>carros2 array de objetos</h3>
            {carros2.map((item , index)=> (
                <p key={index}>
                    {item.modelo +' - '}
                    {item.ano +' - '} 
                    {item.cor +' - '} 
                    {item.fotos ? item.fotos : 'foto nao encontrada'}</p>
            ))}
            <h3>carros2 array de objetos em lista</h3>
            <ul>
                {carros2.map((item, index) => (
                    <li key={index}>
                        carros 
                        {item.modelo +' - '}
                        {item.ano +' - '}
                        {item.cor +' - '}
                        {item.fotos ? item.fotos : 'foto nao encontrada'}
                    </li>
                ))}
            </ul>
        </Pagina>
    )
}

// <h2>O conteudo pode ser infinito</h2>
// <p>Conteúdo da página </p>
// <p>Conteúdo da página </p>