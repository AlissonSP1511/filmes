'use client'
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
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
            <Pagina titulo="Disney Tabela">
            </Pagina>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map((personagem, index) => (
                        <tr key={index}>
                            <td>{personagem._id}</td>
                            <td>{personagem.name}</td>
                            <td>
                                <img src={personagem.imageUrl} className="img-fluid" alt={personagem.name} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}