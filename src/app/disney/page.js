'use client'

import { Button, Card, Col, Container, Modal, NavLink, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import Pagina from "../components/Pagina"
import axios from "axios"
import apiDisney from "../services/apiDisney"



export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('/character').then(res => {
            setPersonagens(res.data.data)
        })
    }, [])

    return (

        <>
            <Pagina titulo="Disney">
            </Pagina>
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                    <Col className="mb-4">
                        <NavLink href="./disney/cards"><Button variant="primary">Cards</Button></NavLink>
                    </Col>
                    <Col className="mb-4">
                        <NavLink href="./disney/carrossel"><Button variant="primary">Carrossel</Button></NavLink>
                    </Col>
                    <Col className="mb-4">
                        <NavLink href="./disney/tabela"><Button variant="primary">Tabela</Button></NavLink>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
