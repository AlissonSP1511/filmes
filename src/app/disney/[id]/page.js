'use client'

import { Button, Card, Col, Container, ListGroup, Modal, NavLink, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import Pagina from "@/app/components/Pagina"
import axios from "axios"
import apiDisney from "@/app/services/apiDisney"


export default function Page({ params }) {

    const [personagem, setPersonagem] = useState({})

    useEffect(() => {
        apiDisney.get(`character/${params.id}`).then(res => {
            setPersonagem(res.data.data)
        })
    }, [])

    return (
        <>
            <Pagina titulo={personagem.name}>
                {
                    personagem._id &&
                    <div>
                        <Row md={4}>
                            <Col>
                                <img src={personagem.imageUrl} />
                            </Col>
                            <Col md={8}>
                                <p><b>Nome: </b>{personagem.name}</p>
                                <p><b>Data de Criação:</b> {personagem.createdAt}</p>
                                <p><a target="_blank" href={personagem.sourceUrl}>Ver mais</a></p>
                            </Col>
                            <Col md={6} className="mt-3">
                                <Card border="primary">
                                    <Card.Header className="text-white bg-primary">Filmes</Card.Header>
                                    <Card.Body>
                                        <ListGroup>
                                            {personagem.films.map(item => (
                                                <ListGroup.Item key={item}>
                                                    {item}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Card border="primary">
                                    <Card.Header className="text-white bg-primary">Series</Card.Header>
                                    <Card.Body>
                                        <ListGroup>
                                            {personagem.tvShows.map(item => (
                                                <ListGroup.Item key={item}>
                                                    {item}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Card border="primary">
                                    <Card.Header className="text-white bg-primary">videoGames</Card.Header>
                                    <Card.Body>
                                        <ListGroup>
                                            {personagem.videoGames.map(item => (
                                                <ListGroup.Item key={item}>
                                                    {item}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Card border="primary">
                                    <Card.Header className="text-white bg-primary">parkAttractions</Card.Header>
                                    <Card.Body>
                                        <ListGroup>
                                            {personagem.parkAttractions.map(item => (
                                                <ListGroup.Item key={item}>
                                                    {item}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>


                        </Row>
                    </div>
                }
            </Pagina>
        </>
    )
}
