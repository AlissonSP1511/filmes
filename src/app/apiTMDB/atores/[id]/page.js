'use client'
import Pagina from "@/app/components/Pagina";
import apiTMDB from "@/app/services/apiTMDB";
import { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import Link from 'next/link'; // Importe o Link
import { DateTime } from "luxon";

export default function Page({ params }) {

    console.log(params.id)

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])
    const [tvs, setTvs] = useState([])

    useEffect(() => {
        apiTMDB.get(`person/${params.id}?language=pt-BR`)
            .then(res => {
                setAtor(res.data); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });

        apiTMDB.get(`person/${params.id}/movie_credits?language=pt-BR`)
            .then(res => {
                setFilmes(res.data.cast); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get(`person/${params.id}/tv_credits?language=pt-BR`)
            .then(res => {
                setTvs(res.data.cast); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
    }, []);

    return (
        <Pagina titulo={ator.name}>
            {
                ator.id > 0 && (
                    <Row className="mt-3">
                        <Col sm={4}>
                            <img
                                className="img-fluid"
                                src={ator.profile_path ? 'https://image.tmdb.org/t/p/w500/' + ator.profile_path : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
                                alt={ator.name}
                            />
                        </Col>
                        <Col sm={8}>
                            <p><b>Nome: </b> {ator.name}</p>
                            <p><b>Tambem conhecido como: </b>
                                <ul>
                                    {ator.also_known_as.map((nome, index) => (
                                        <li key={index}>{nome}</li>
                                    ))}
                                </ul>
                            </p>
                            <p><b>Popularidade: </b> {ator.popularity}</p>
                            <p><b>Nascimento: </b> {ator.birthday ? DateTime.fromISO(ator.birthday).toFormat('dd/MM/yyyy') : 'Nenhuma informação disponível.'}</p>
                            <p><b>Idade: </b> {ator.birthday ? Math.floor(Math.abs(DateTime.fromISO(ator.birthday).diffNow('years').years)) + ' anos' : 'Nenhuma informação disponível.'}</p>
                            <p><b>Local de nascimento: </b> {ator.place_of_birth ? ator.place_of_birth : 'Nenhuma informação disponível.'}</p>
                            {ator.deathday && <p><b>Data de falecimento: </b> {DateTime.fromISO(ator.deathday).toFormat('dd/MM/yyyy')}</p>}
                            <p><b>Biografia: </b> {ator.biography ? ator.biography : 'Nenhuma biografia disponível.'}</p>
                        </Col>
                        {
                            filmes && (
                                <Col sm={12}>
                                    <h2>Filmes</h2>
                                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                        {filmes.map(item => (
                                            <Col
                                                key={item.id}
                                                title={item.name}
                                                className="mb-3"
                                                sm={3}
                                            >
                                                <Card className="text-center">
                                                    <Link href={`/apiTMDB/filmes/${item.id}`}>
                                                        <img
                                                            className="img-fluid"
                                                            src={item.poster_path ? 'https://image.tmdb.org/t/p/w500/' + item.poster_path : ('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg')}
                                                            alt={item.name}
                                                        />
                                                    </Link>
                                                    <Card.Body>
                                                        <Card.Title>{item.title}</Card.Title>
                                                        <Card.Text>
                                                            <p> Data de lançamento:{item.release_date}<br /> Nota:{item.vote_average}<br /> Popularidade:{item.popularity}</p>

                                                        </Card.Text>

                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            )

                        }
                        {
                            tvs && (
                                <Col sm={12}>
                                    <h3>Series</h3>
                                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                        {tvs.map(item => (
                                            <Col
                                                key={item.id}
                                                title={item.name}
                                                className="mb-3"
                                                sm={3}
                                            >
                                                <Card className="text-center">
                                                    <Link href={`/apiTMDB/series/${item.id}`}>
                                                        <img
                                                            className="img-fluid"
                                                            src={item.poster_path ? 'https://image.tmdb.org/t/p/w500/' + item.poster_path : ('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg')}
                                                            alt={item.name}
                                                        />
                                                    </Link>
                                                    <Card.Body>
                                                        <Card.Title>{item.name}</Card.Title>
                                                        <Card.Text>
                                                            <p> Data de lançamento:{item.release_date}<br /> Nota:{item.vote_average}<br /> Popularidade:{item.popularity}</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            )
                        }
                    </Row>
                )
            }
        </Pagina>
    )
}
