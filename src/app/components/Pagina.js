'use client'
import { Container, Nav, Navbar, NavDropdown, Button, Collapse } from "react-bootstrap";
import { useState } from "react";

export default function Pagina(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" expanded={expanded}>
                <Container>
                    <Navbar.Brand href="/">{props.titulo}</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Página 1</Nav.Link>
                            <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
                            <Nav.Link href="/array">Array</Nav.Link>
                            <Nav.Link href="/objetos">Objetos</Nav.Link>
                            <Nav.Link href="/sistema_academico">Carros</Nav.Link>
                            <Nav.Link href="/cont">Contador</Nav.Link>
                            <NavDropdown title="Disney" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/disney">Disney</NavDropdown.Item>
                                <NavDropdown.Item href="/disney/cards">Cards</NavDropdown.Item>
                                <NavDropdown.Item href="/disney/carrossel">Carrossel</NavDropdown.Item>
                                <NavDropdown.Item href="/disney/tabela">Tabela</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/apiTMDB">API TMDB</Nav.Link>
                            <NavDropdown title="Filmes" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/apiTMDB/filmes">Filmes</NavDropdown.Item>
                                <NavDropdown.Item href="/apiTMDB/filmes/cards">Cards</NavDropdown.Item>
                                <NavDropdown.Item href="/apiTMDB/filmes/carrossel">Carrossel</NavDropdown.Item>
                                <NavDropdown.Item href="/apiTMDB/filmes/tabela">Tabela</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Series de TV" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/apiTMDB/series">Series de TV</NavDropdown.Item>
                                <NavDropdown.Item href="/apiTMDB/series/cards">Cards</NavDropdown.Item>
                                <NavDropdown.Item href="/apiTMDB/series/carrossel">Carrossel</NavDropdown.Item>
                                <NavDropdown.Item href="/apiTMDB/series/tabela">Tabela</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/apiZelda">API Zelda</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="text-dark bg-dark bg-opacity-25 p-5">
                <h1 className="container">{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>
    );
}
