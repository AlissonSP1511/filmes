'use client'
import Pagina from "@/app/components/Pagina";
import apiTMDB from "@/app/services/apiTMDB";
import Link from "next/link";
import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"


export default function Page({ params }) {

    const [movie, setMovie] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        apiTMDB.get(`movie/${params.id}?language=pt-BR`)
            .then(res => {
                setMovie(res.data); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });

        apiTMDB.get(`movie/${params.id}/credits?language=pt-BR`)
            .then(res => {
                setAtores(res.data.cast); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
    }, []);

    return (
        <Pagina titulo={movie.title}>
            {
                movie.id && (
                    <Row className="mt-3">
                        <Col sm={4}>
                            <img
                                className="img-fluid"
                                src={movie.poster_path ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : ('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg')}
                                alt={movie.name}
                            />
                        </Col>
                        <Col sm={8}>
                            <p><b>Titulo Original: </b> {movie.original_title}</p>
                            <p><b>Tagline: </b> {movie.tagline}</p>
                            <p><b>Popularidade: </b> {movie.popularity}</p>
                            <p><b>Lançamento: </b> {movie.release_date}</p>
                            <p><b>Orçamento: </b> {movie.budget}</p>
                            { movie.genres && <p><b>Generos: </b>
                                {movie.genres.map(item => item.name).join(', ')}</p>}
                            <p><b>sinopse: </b> {movie.overview}</p>
                        </Col>
                        {atores &&
                            <Col sm={12}>
                                <h3 className="mt-3"><br />Atores</h3>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {atores.map(item => (
                                        <Col
                                            key={item.id}
                                            title={item.name}
                                            className="mb-3" sm={3}
                                        >
                                            <Card className="text-center">
                                                <Link href={`/apiTMDB/atores/${item.id}`}>
                                                    <img
                                                        className="img-fluid"
                                                        src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : ('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
                                                        alt={item.name}
                                                    />
                                                </Link>
                                                <Card.Body>
                                                    <Card.Title>Nome: {item.name}<br />Personagem: {item.character}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        }
                    </Row>
                )
            }
        </Pagina>
    )
}
