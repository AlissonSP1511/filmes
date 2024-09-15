'use client'
import Pagina from "@/app/components/Pagina";
import apiTMDB from "@/app/services/apiTMDB";
import Link from "next/link";
import { useEffect, useState } from "react"
import { Card, Carousel, Col, Row } from "react-bootstrap"

export default function Page({ params }) {

    const [tv, setTv] = useState({})
    const [atores, setAtores] = useState([])
    const [tvImagesLogos, setTvImagesLogos] = useState([])
    const [tvImagesBackdrops, setTvImagesBackdrops] = useState([])
    const [tvImagesPosters, setTvImagesPosters] = useState([])

    useEffect(() => {
        apiTMDB.get(`tv/${params.id}?language=pt-BR`)
            .then(res => {
                setTv(res.data); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get(`tv/${params.id}/credits?language=pt-BR`)
            .then(res => {
                setAtores(res.data.cast); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get(`tv/${params.id}/images`)
            .then(res => {
                console.log("tvimages res.data", res.data)
                setTvImagesLogos(res.data.logos); // Acessando a lista de resultados corretamente
                setTvImagesBackdrops(res.data.backdrops); // Acessando a lista de resultados corretamente
                setTvImagesPosters(res.data.posters); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
    }, []);

    console.log('tvimages', tvImagesLogos, tvImagesBackdrops, tvImagesPosters, tv.images)

    return (
        <Pagina titulo={tv.name}>
            {
                tv.id && (
                    <Row className="mt-3">
                        <Col sm={4}>
                            <img
                                className="img-fluid"
                                src={tv.poster_path ? 'https://image.tmdb.org/t/p/w500/' + tv.poster_path : ('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg')}
                                alt={tv.name}
                            />
                        </Col>
                        <Col sm={8}>
                            <p><b>Titulo Original: </b> {tv.original_name}</p>
                            <p><b>Número de Episódios: </b> {tv.number_of_episodes}</p>
                            <p><b>Número de Temporadas: </b> {tv.number_of_seasons}</p>
                            <p><b>Popularidade: </b> {tv.popularity}</p>
                            <p><b>Média de Votos: </b> {tv.vote_average}</p>
                            <p><b>Data de Lancamento: </b> {tv.first_air_date}</p>
                            <p><b>Data de Encerramento: </b> {tv.last_air_date}</p>
                            {tv.spoken_languages.length > 0 &&
                                <p><b>Idiomas: </b>
                                    {tv.spoken_languages.map(item => item.name).join(', ')}</p>}
                            {tv.genres.length > 0 &&
                                <p><b>Generos: </b>
                                    {tv.genres.map(item => item.name).join(', ')}</p>}
                            <p><b>Site: </b> <Link href={tv.homepage}>{tv.homepage}</Link></p>
                            <p><b>sinopse: </b> {tv.overview}</p>
                            <p><b>Tagline: </b> {tv.tagline}</p>
                        </Col>
                        {tv.seasons &&
                            <Col sm={12}>
                                <h3 className="mt-3"><br />Temporadas</h3>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {tv.seasons.map(item => (
                                        <Col
                                            key={item.id}
                                            title={item.name}
                                            className="mb-3" sm={3}
                                        >
                                            <Card className="text-center">
                                                <Link href={`/apiTMDB/series/${params.id}/season/${item.season_number}`}>
                                                    <img
                                                        className="img-fluid"
                                                        src={item.poster_path ? 'https://image.tmdb.org/t/p/w500/' + item.poster_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
                                                        alt={item.name}
                                                    />
                                                </Link>
                                                <Card.Body>
                                                    <Card.Title>
                                                        {item.name}<br />
                                                    </Card.Title>
                                                    <Card.Text>
                                                        Episódios: {item.episode_count}<br />
                                                        Lancamento: {item.air_date}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        }
                        {tv.created_by &&
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
                                                        src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
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
                        {tv.production_companies &&
                            <Col sm={12}>
                                <h3 className="mt-3"><br />Produtoras</h3>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {tv.production_companies.map(item => (
                                        <Col
                                            key={item.id}
                                            title={item.name}
                                            className="mb-3" sm={3}
                                        >
                                            <Card className="text-center">
                                                <Link href={`/apiTMDB/series/${params.id}/companies/${item.id}`}>
                                                    <img
                                                        className="img-fluid"
                                                        src={item.logo_path ? 'https://image.tmdb.org/t/p/w500/' + item.logo_path : (' ')}
                                                        alt={item.name}
                                                    />
                                                </Link>
                                                <Card.Body>
                                                    <Card.Title>{item.name}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        }
                        {tvImagesLogos &&
                            <Carousel className="container mt-3" >
                                {tvImagesLogos.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={`https://image.tmdb.org/t/p/original/${item.file_path}`} // Certifique-se de acessar `file_path` corretamente
                                            alt={`logos ${index}`}
                                        />
                                        <Carousel.Caption>
                                            <h3>Média de votos: {item.vote_average}</h3>
                                            <p>Quantidade de votos: {item.vote_count}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                        }
                        {tvImagesBackdrops &&
                            <Carousel className="container mt-3">
                                {tvImagesBackdrops.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={`https://image.tmdb.org/t/p/original/${item.file_path}`} // Certifique-se de acessar `file_path` corretamente
                                            alt={`backdrops ${index}`}
                                        />
                                        <Carousel.Caption>
                                            <h3>Média de votos: {item.vote_average}</h3>
                                            <p>Quantidade de votos: {item.vote_count}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                        }
                        {tvImagesPosters &&
                            <Carousel className="container mt-3">
                                {tvImagesPosters.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={`https://image.tmdb.org/t/p/original/${item.file_path}`} // Certifique-se de acessar `file_path` corretamente
                                            alt={`posters ${index}`}
                                        />
                                        <Carousel.Caption>
                                            <h3>Média de votos: {item.vote_average}</h3>
                                            <p>Quantidade de votos: {item.vote_count}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                        }
                    </Row>
                )
            }
        </Pagina>
    )
}



