// 'use client'
// import { useEffect, useState } from "react";
// import { Card, Col, Row } from "react-bootstrap";
// import Pagina from "@/app/components/Pagina";
// import apiTMDB from "@/app/services/apiTMDB";
// import Link from "next/link";

// export default function SeasonPage({ params }) {

//     console.log(params.id + ' ' + params.season_number + ' ' + params.episode_number);
//     console.log(params);

//     const { id, season_number } = params;
//     const [season, setSeason] = useState({});
//     const [episodes, setEpisodes] = useState([]);
//     const [atores, setAtores] = useState([])
//     const [tv, setTv] = useState({})
//     const [episodeImages, setEpisodeImages] = useState({})

//     useEffect(() => {
//         // Buscar detalhes da temporada específica
//         apiTMDB.get(`tv/${params.id}?language=pt-BR`)
//             .then(res => {
//                 setTv(res.data); // Acessando a lista de resultados corretamente
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });
//         apiTMDB.get(`tv/${params.id}/season/${params.season_number}?language=pt-BR`)
//             .then(res => {
//                 setSeason(res.data);
//                 setEpisodes(res.data.episodes); // Salva os episódios dessa temporada
//             })
//             .catch(error => {
//                 console.error('Erro ao buscar detalhes da temporada:', error);
//             });
//         apiTMDB.get(`tv/${params.id}/credits?language=pt-BR`)
//             .then(res => {
//                 setAtores(res.data.cast); // Acessando a lista de resultados corretamente
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });
//         apiTMDB.get(`tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}/images`)
//             .then(res => {
//                 console.log('Episódio res data:', res.data);
//                 setEpisodeImages(res.data.stills);
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });
//     }, [id, season_number]);

//     console.log ('Episódio images:', episodeImages);

//     return (
//         <Pagina titulo={`${tv.name} - ${season.name}`}>
//             {
//                 season.id && (
//                     <Row className="mt-3">
//                         <Col sm={4}>
//                             <img
//                                 className="img-fluid"
//                                 src={season.poster_path ? 'https://image.tmdb.org/t/p/w500/' + season.poster_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'}
//                                 alt={season.name}
//                             />
//                         </Col>
//                         <Col sm={8}>
//                             <p><b>Nome da Temporada: </b> {season.name}</p>
//                             <p><b>Data de Lançamento: </b> {season.air_date}</p>
//                             <p><b>Resumo: </b> {season.overview || "Sem resumo disponível."}</p>
//                             <p><b>Quantidade de Episódios: </b> {season.episodes.length}</p>
//                         </Col>
//                         <Col sm={12}>
//                             <h3 className="mt-3"><br />Destaques do Episódio</h3>
//                             <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                 {episodeImages.map(item => (
//                                     <Col
//                                         key={item.id}
//                                         title={item.name}
//                                         className="mb-3" sm={3}
//                                     >
//                                         <Card className="text-center">

//                                                 <img
//                                                     className="img-fluid"
//                                                     src={item.file_path ? 'https://image.tmdb.org/t/p/original/' + item.file_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
//                                                     alt={item.name}
//                                                 />

//                                             <Card.Body>
//                                                 <Card.Title>
//                                                     {item.name}<br />
//                                                 </Card.Title>
//                                                 <Card.Text>
//                                                     Média de votos: {item.vote_average}<br />
//                                                     Contagem de votos: {item.vote_count}
//                                                 </Card.Text>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </Col>
//                         <Col sm={12}>
//                             <h3 className="mt-3"><br />Atores</h3>
//                             <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                 {atores.map(item => (
//                                     <Col
//                                         key={item.id}
//                                         title={item.name}
//                                         className="mb-3" sm={3}
//                                     >
//                                         <Card className="text-center">
//                                             <Link href={`/apiTMDB/atores/${item.id}`}>
//                                                 <img
//                                                     className="img-fluid"
//                                                     src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
//                                                     alt={item.name}
//                                                 />
//                                             </Link>
//                                             <Card.Body>
//                                                 <Card.Title>Nome: {item.name}<br />Personagem: {item.character}</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </Col>





//                     </Row>
//                 )
//             }
//         </Pagina>
//     );
// }





// 'use client'
// import { useEffect, useState } from "react";
// import { Card, Col, Row, Modal, Button } from "react-bootstrap";
// import Pagina from "@/app/components/Pagina";
// import apiTMDB from "@/app/services/apiTMDB";
// import Link from "next/link";

// export default function SeasonPage({ params }) {

//     console.log(params.id + ' ' + params.season_number + ' ' + params.episode_number);
//     console.log(params);

//     const { id, season_number } = params;
//     const [season, setSeason] = useState({});
//     const [episodes, setEpisodes] = useState([]);
//     const [atores, setAtores] = useState([]);
//     const [tv, setTv] = useState({});
//     const [episodeImages, setEpisodeImages] = useState([]);

//     // Estado do Modal
//     const [showModal, setShowModal] = useState(false);
//     const [selectedImage, setSelectedImage] = useState(null);

//     // Função para abrir o modal
//     const handleShow = (image) => {
//         setSelectedImage(image);
//         setShowModal(true);
//     };

//     // Função para fechar o modal
//     const handleClose = () => {
//         setShowModal(false);
//         setSelectedImage(null);
//     };

//     useEffect(() => {
//         // Buscar detalhes da temporada específica
//         apiTMDB.get(`tv/${params.id}?language=pt-BR`)
//             .then(res => {
//                 setTv(res.data); // Acessando a lista de resultados corretamente
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });
//         apiTMDB.get(`tv/${params.id}/season/${params.season_number}?language=pt-BR`)
//             .then(res => {
//                 setSeason(res.data);
//                 setEpisodes(res.data.episodes); // Salva os episódios dessa temporada
//             })
//             .catch(error => {
//                 console.error('Erro ao buscar detalhes da temporada:', error);
//             });
//         apiTMDB.get(`tv/${params.id}/credits?language=pt-BR`)
//             .then(res => {
//                 setAtores(res.data.cast); // Acessando a lista de resultados corretamente
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });
//         apiTMDB.get(`tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}/images`)
//             .then(res => {
//                 console.log('Episódio res data:', res.data);
//                 setEpisodeImages(res.data.stills);
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });
//     }, [id, season_number]);

//     console.log ('Episódio images:', episodeImages);

//     return (
//         <Pagina titulo={`${tv.name} - ${season.name}`}>
//             {
//                 season.id && (
//                     <Row className="mt-3">
//                         <Col sm={4}>
//                             <img
//                                 className="img-fluid"
//                                 src={season.poster_path ? 'https://image.tmdb.org/t/p/w500/' + season.poster_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'}
//                                 alt={season.name}
//                             />
//                         </Col>
//                         <Col sm={8}>
//                             <p><b>Nome da Temporada: </b> {season.name}</p>
//                             <p><b>Data de Lançamento: </b> {season.air_date}</p>
//                             <p><b>Resumo: </b> {season.overview || "Sem resumo disponível."}</p>
//                             <p><b>Quantidade de Episódios: </b> {season.episodes.length}</p>
//                         </Col>
//                         <Col sm={12}>
//                             <h3 className="mt-3"><br />Destaques do Episódio</h3>
//                             <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                 {episodeImages.map(item => (
//                                     <Col
//                                         key={item.file_path}
//                                         title={item.name}
//                                         className="mb-3" sm={3}
//                                     >
//                                         <Card className="text-center" onClick={() => handleShow(item.file_path)}>
//                                             <img
//                                                 className="img-fluid"
//                                                 src={item.file_path ? 'https://image.tmdb.org/t/p/original/' + item.file_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
//                                                 alt={item.name}
//                                             />
//                                             <Card.Body>
//                                                 <Card.Title>
//                                                     {item.name}<br />
//                                                 </Card.Title>
//                                                 <Card.Text>
//                                                     Média de votos: {item.vote_average}<br />
//                                                     Contagem de votos: {item.vote_count}
//                                                 </Card.Text>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </Col>

//                         {/* Modal para exibir a imagem grande */}
//                         <Modal show={showModal} onHide={handleClose} centered size="lg">
//                             <Modal.Header closeButton>
//                                 <Modal.Title>Imagem do Episódio</Modal.Title>
//                             </Modal.Header>
//                             <Modal.Body>
//                                 {selectedImage && (
//                                     <img src={`https://image.tmdb.org/t/p/original/${selectedImage}`} alt="Imagem do Episódio" className="img-fluid" />
//                                 )}
//                             </Modal.Body>
//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={handleClose}>
//                                     Fechar
//                                 </Button>
//                             </Modal.Footer>
//                         </Modal>

//                         <Col sm={12}>
//                             <h3 className="mt-3"><br />Atores</h3>
//                             <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                 {atores.map(item => (
//                                     <Col
//                                         key={item.id}
//                                         title={item.name}
//                                         className="mb-3" sm={3}
//                                     >
//                                         <Card className="text-center">
//                                             <Link href={`/apiTMDB/atores/${item.id}`}>
//                                                 <img
//                                                     className="img-fluid"
//                                                     src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
//                                                     alt={item.name}
//                                                 />
//                                             </Link>
//                                             <Card.Body>
//                                                 <Card.Title>Nome: {item.name}<br />Personagem: {item.character}</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </Col>
//                     </Row>
//                 )
//             }
//         </Pagina>
//     );
// }






'use client'
import { useEffect, useState } from "react";
import { Card, Col, Row, Modal } from "react-bootstrap";
import Pagina from "@/app/components/Pagina";
import apiTMDB from "@/app/services/apiTMDB";
import Link from "next/link";

export default function SeasonPage({ params }) {

    const { id, season_number } = params;
    const [season, setSeason] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [atores, setAtores] = useState([]);
    const [tv, setTv] = useState({});
    const [episodeImages, setEpisodeImages] = useState([]);
    const [episode, setEpisode] = useState({});

    // Estado do Modal
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Função para abrir o modal
    const handleShow = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    // Função para fechar o modal ao clicar na imagem ou fora
    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        // Buscar detalhes da temporada específica
        apiTMDB.get(`tv/${params.id}?language=pt-BR`)
            .then(res => {
                console.log(res.data);
                setTv(res.data); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get(`tv/${params.id}/season/${params.season_number}?language=pt-BR`)
            .then(res => {
                setSeason(res.data);
                setEpisodes(res.data.episodes); // Salva os episódios dessa temporada
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes da temporada:', error);
            });
        apiTMDB.get(`tv/${params.id}/credits?language=pt-BR`)
            .then(res => {
                setAtores(res.data.cast); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get(`tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}/images`)
            .then(res => {
                setEpisodeImages(res.data.stills);
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
        apiTMDB.get(`tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}`)
            .then(res => {
                setEpisode(res.data);
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
    }, [id, season_number]);

    return (
        <Pagina titulo={`${tv.name} - ${season.name}`}>
            {
                season.id && (
                    <Row className="mt-3">
                        <Col sm={4}>
                            <img
                                className="img-fluid"
                                src={season.poster_path ? 'https://image.tmdb.org/t/p/w500/' + season.poster_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'}
                                alt={season.name}
                            />
                        </Col>
                        <Col sm={8}>
                            <p><b>Nome da Temporada: </b> {season.name}</p>
                            <p><b>Data de Lançamento: </b> {season.air_date}</p>
                            <p><b>Resumo: </b> {season.overview || "Sem resumo disponível."}</p>
                            <p><b>Quantidade de Episódios: </b> {season.episodes.length}</p>
                        </Col>
                        {episodeImages &&
                            <div className="mt-3">
                                <Col sm={12}>
                                    <h3 className="mt-3"><br />Destaques do Episódio</h3>
                                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                        {episodeImages.map(item => (
                                            <Col
                                                key={item.file_path}
                                                title={item.name}
                                                className="mb-3" sm={3}
                                            >
                                                <Card className="text-center" onClick={() => handleShow(item.file_path)}>
                                                    <img
                                                        className="img-fluid"
                                                        src={item.file_path ? 'https://image.tmdb.org/t/p/original/' + item.file_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
                                                        alt={item.name}
                                                    />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            {item.name}<br />
                                                        </Card.Title>
                                                        <Card.Text>
                                                            Média de votos: {item.vote_average}<br />
                                                            Contagem de votos: {item.vote_count}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                                {/* Modal para exibir a imagem grande */}
                                <Modal
                                    show={showModal}
                                    onHide={handleClose}
                                    fullscreen={true} // Define o modal como fullscreen
                                    centered
                                >
                                    <Modal.Body onClick={handleClose} style={{ cursor: "pointer" }}>
                                        {selectedImage && (
                                            <img
                                                src={`https://image.tmdb.org/t/p/original/${selectedImage}`}
                                                alt="Imagem do Episódio"
                                                className="img-fluid"
                                                style={{ width: "100%" }}
                                            />
                                        )}
                                    </Modal.Body>
                                </Modal>
                            </div>
                        }
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
                        {episode.guest_stars &&
                            <Col sm={12}>
                                <h3 className="mt-3"><br />Atores Convidados</h3>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                    {episode.guest_stars.map(item => (
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
    );
}
