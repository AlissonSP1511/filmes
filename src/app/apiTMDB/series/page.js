'use client'
import Pagina from "@/app/components/Pagina";
import apiTMDB from "@/app/services/apiTMDB";
import { useEffect, useState } from "react"
import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap"
import Link from 'next/link'; // Importe o Link

export default function Page() {

    const [tvs_popular, setTvs_popular] = useState([])
    const [tvs_airing_today, setTvs_airing_today] = useState([])
    const [tvs_top_rated, setTvs_top_rated] = useState([])
    const [tvs_on_the_air, setTvs_on_the_air] = useState([])

    useEffect(() => {
        apiTMDB.get('/tv/airing_today?language=pt-BR')
            .then(res => {
                setTvs_airing_today(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get('/tv/popular?language=pt-BR')
            .then(res => {
                setTvs_popular(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get('/tv/top_rated?language=pt-BR')
            .then(res => {
                setTvs_top_rated(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get('/tv/on_the_air?language=pt-BR')
            .then(res => {
                setTvs_on_the_air(res.data.results); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
    }, []);

    return (
        <Pagina titulo="Series">
            {
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="home" title='Series no ar hoje'>
                        {tvs_airing_today &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {tvs_airing_today.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_name ? item.original_name : '-'}`}<br />
                                                        {`Início: ${item.first_air_date}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`País de origem: ${item.origin_country ? item.origin_country : '-'}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.thetvdb.org/tv/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/series/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/series/${item.id}`} >Detalhes</Button> */}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        }
                    </Tab>
                    <Tab eventKey="profile" title="Series Populares">
                        {tvs_popular &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {tvs_popular.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_name ? item.original_name : '-'}`}<br />
                                                        {`Início: ${item.first_air_date}`}<br />
                                                        {`País de origem: ${item.origin_country ? item.origin_country : '-'}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.thetvdb.org/tv/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/series/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/series/${item.id}`} >Detalhes</Button> */}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        }
                    </Tab>
                    <Tab eventKey="longer-tab" title="Series mais votadas">
                        {tvs_top_rated &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {tvs_top_rated.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_name ? item.original_name : '-'}`}<br />
                                                        {`Início: ${item.first_air_date}`}<br />
                                                        {`País de origem: ${item.origin_country ? item.origin_country : '-'}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.thetvdb.org/tv/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/series/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/series/${item.id}`} >Detalhes</Button> */}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        }
                    </Tab>
                    <Tab eventKey="contact" title="Series no ar">
                        {tvs_on_the_air &&
                            <div>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {tvs_on_the_air.map(item => (
                                        <Col key={item.id} className="mb-4">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="img-fluid" />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>
                                                        {`Original: ${item.original_name ? item.original_name : '-'}`}<br />
                                                        {`Início: ${item.first_air_date}`}<br />
                                                        {`País de origem: ${item.origin_country ? item.origin_country : '-'}`}<br />
                                                        {`Nota: ${item.vote_average}`}<br />
                                                        {`Popularidade: ${item.popularity}`}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button onClick={() => window.open(`https://www.thetvdb.org/tv/${item.id}`)} variant="danger" >TMDB</Button>
                                                        <Link className="btn btn-danger" href={`/apiTMDB/series/${item.id}`}>
                                                            Detalhes
                                                        </Link>
                                                        {/* <Button href={`/series/${item.id}`} >Detalhes</Button> */}
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
