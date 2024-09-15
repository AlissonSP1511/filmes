'use client'

import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import Pagina from "@/app/components/Pagina"
import apiZelda from "../services/apiZelda"

export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiZelda.get('/all').then(res => {
            setPersonagens(res.data.data)
        })
    }, [])

    console.log(personagens)

    return (
        <>
            <Pagina titulo="Api Zelda" />
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                    {personagens.map((item, index) => (
                        <Col key={index} className="mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={item.image} className="img-fluid" />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{item.name} <br /> {item.category}</Card.Title>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Button onClick={() => window.open(item.sourceUrl)} variant="primary">Detalhes</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container>
                {personagens.map((personagem, index) => (
                    <div key={index}>
                        <Row className="mt-3">
                            <Col>
                                <img src={personagem.image} className={`img-fluid ${personagem.title}`} alt={personagem.title} />
                            </Col>
                            <Col>
                                <p><b>ID: </b>{personagem.id}</p>
                                <p><b>Nome: </b>{personagem.name}</p>
                                <p><b>Categoria: </b>{personagem.category}</p>
                                <p><b>Efeito de Cozinhar: </b>{personagem.cooking_effect || 'N/A'}</p>
                                <p><b>Recuperação de Coração: </b>{personagem.heart_recovered || 'N/A'}</p>
                                <p><b>Localizações Comuns: </b>{personagem.common_locations ? personagem.common_locations.map(item => <li key={item}>{item}</li>) : 'N/A'}</p>
                                <p><b>Item de DLC: </b>{personagem.dlc || 'N/A'}</p>
                                <p><b>Propriedades: </b>
                                    {personagem.properties
                                        ? <>
                                            <li>Ataque: {personagem.properties.attack}</li>
                                            <li>Defesa: {personagem.properties.defense}</li>
                                        </>
                                        : 'N/A'}
                                </p>
                                <p><b>Itens que Caem: </b>{personagem.drops ? personagem.drops.map(item => <li key={item}>{item}</li>) : 'N/A'}</p>
                                <p><b>Descrição: </b>{personagem.description || 'N/A'}</p>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>
        </>
    )
}
