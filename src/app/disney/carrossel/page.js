'use client'
import { Carousel, Container } from "react-bootstrap";
import Cabecalho from "@/app/components/Cabecalho";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagina from "@/app/components/Pagina";
import apiDisney from "@/app/services/apiDisney";


export default function Clientes() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('/character').then(res => {
            setPersonagens(res.data.data)
        })
    }, [])

    return (
        <>
            <Pagina titulo="Disney Carrossel">
            </Pagina>

            <Carousel className="container">
                {personagens.map((personagem, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"  preserveAspectRatio="xMidYMid slice"
                            src={personagem.imageUrl}
                            alt={personagem.name}
                        />
                        <Carousel.Caption>
                            <h3>{personagem.name}</h3>
                            <p>ID: {personagem._id}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
