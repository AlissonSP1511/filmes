'use client'

import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import Pagina from "@/app/components/Pagina"
import axios from "axios"
import apiDisney from "@/app/services/apiDisney"



export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('/character').then(res => {
            setPersonagens(res.data.data)
        })
    }, [])

    return (
        <>
            <Pagina titulo="Disney Cards">
            </Pagina>
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                    {personagens.map((item, index) => (
                        <Col key={index} className="mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={item.imageUrl} className="img-fluid" />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{item.name} - {item.name}</Card.Title>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <Card.Text className="mb-0">
                                        Ano - {item.ano}
                                    </Card.Text> */}
                                        <Button onClick={() => window.open(item.sourceUrl)} variant="primary">Detalhes</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}