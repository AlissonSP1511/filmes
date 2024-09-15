'use client'
import Pagina from "@/app/components/Pagina";
import apiTMDB from "@/app/services/apiTMDB";
import { useEffect, useState } from "react"
import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap"
import Link from 'next/link'; // Importe o Link

export default function Page() {

    const [movies_popular, setMovies_popular] = useState([])
    const [movies_now_playing, setMovies_now_playing] = useState([])
    const [movies_top_rated, setMovies_top_rated] = useState([])
    const [movies_upcoming, setMovies_upcoming] = useState([])


    useEffect(() => {
        apiTMDB.get('/movie/now_playing?language=pt-BR')
            .then(res => {
                setMovies_now_playing(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get('/movie/popular?language=pt-BR')
            .then(res => {
                setMovies_popular(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get('/movie/top_rated?language=pt-BR')
            .then(res => {
                setMovies_top_rated(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get('/movie/upcoming?language=pt-BR')
            .then(res => {
                setMovies_upcoming(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
    }, []);

    return (
        <Pagina titulo="Filmes">
            {
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="home" title='Filmes em Cartaz'>
                        {movies_now_playing &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {movies_now_playing.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_title ? item.original_title : '-'}`}<br />
                                                        {`Lançamento: ${item.release_date}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.themoviedb.org/movie/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/filmes/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/filmes/${item.id}`} >Detalhes</Button> */}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        }
                    </Tab>
                    <Tab eventKey="profile" title="Filmes Populares">
                        {movies_popular &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {movies_popular.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_title ? item.original_title : '-'}`}<br />
                                                        {`Lançamento: ${item.release_date}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.themoviedb.org/movie/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/filmes/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/filmes/${item.id}`} >Detalhes</Button> */}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        }
                    </Tab>
                    <Tab eventKey="longer-tab" title="Filmes mais votados">
                        {movies_top_rated &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {movies_top_rated.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_title ? item.original_title : '-'}`}<br />
                                                        {`Lançamento: ${item.release_date}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.themoviedb.org/movie/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/filmes/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/filmes/${item.id}`} >Detalhes</Button> */}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        }
                    </Tab>
                    <Tab eventKey="contact" title="Filmes mais recentes">
                        {movies_upcoming &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {movies_upcoming.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_title ? item.original_title : '-'}`}<br />
                                                        {`Lançamento: ${item.release_date}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.themoviedb.org/movie/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/filmes/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/filmes/${item.id}`} >Detalhes</Button> */}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        }
                    </Tab>
                </Tabs>
            }
        </Pagina>
    )
}
