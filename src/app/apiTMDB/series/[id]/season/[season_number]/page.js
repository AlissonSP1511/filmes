// 'use client'
// import { useEffect, useState } from "react";
// import { Card, Col, Image, Row } from "react-bootstrap";
// import Pagina from "@/app/components/Pagina";
// import apiTMDB from "@/app/services/apiTMDB";
// import Link from "next/link";

// export default function SeasonPage({ params }) {

//     console.log(params.id + ' ' + params.season_number);
//     console.log(params);

//     const { id, season_number } = params;
//     const [season, setSeason] = useState({});
//     const [episodes, setEpisodes] = useState([]);
//     const [atores, setAtores] = useState([])
//     const [tv, setTv] = useState({})

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
//     }, [id, season_number]);

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
//                         {episodes &&
//                             <Col sm={12}>
//                                 <h3 className="mt-3">Episódios</h3>
//                                 <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                     {episodes.map(episode => (
//                                         <Col key={episode.id} className="mb-3">
//                                             <Card>
//                                                 <Link href={`/apiTMDB/series/${params.id}/season/${params.season_number}/episode/${episode.episode_number}`}>
//                                                     <Image
//                                                         className="img-fluid"
//                                                         src={episode.still_path ? 'https://image.tmdb.org/t/p/w500/' + episode.still_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
//                                                         alt={episode.name}
//                                                     />
//                                                 </Link>

//                                                 <Card.Body>
//                                                     <Card.Title>{episode.episode_number}. {episode.name}</Card.Title>
//                                                     <Card.Text>
//                                                         {episode.overview || "Sem resumo disponível."}
//                                                     </Card.Text>
//                                                 </Card.Body>
//                                             </Card>
//                                         </Col>
//                                     ))}
//                                 </Row>
//                             </Col>
//                         }
//                         {atores && (
//                             <Col sm={12}>
//                                 <h3 className="mt-3"><br />Atores</h3>
//                                 <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                     {atores.map(item => (
//                                         <Col
//                                             key={item.id}
//                                             title={item.name}
//                                             className="mb-3" sm={3}
//                                         >
//                                             <Card className="text-center">
//                                                 <Link href={`/apiTMDB/atores/${item.id}`}>
//                                                     <img
//                                                         className="img-fluid"
//                                                         src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : ('https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')}
//                                                         alt={item.name}
//                                                     />
//                                                 </Link>
//                                                 <Card.Body>
//                                                     <Card.Title>Nome: {item.name}<br />Personagem: {item.character}</Card.Title>
//                                                 </Card.Body>
//                                             </Card>
//                                         </Col>
//                                     ))}
//                                 </Row>
//                             </Col>
//                         )}
//                         {tv.production_companies &&
//                             <Col sm={12}>
//                                 <h3 className="mt-3"><br />Produtoras</h3>
//                                 <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                     {tv.production_companies.map(item => (
//                                         <Col
//                                             key={item.id}
//                                             title={item.name}
//                                             className="mb-3" sm={3}
//                                         >
//                                             <Card className="text-center">
//                                                 <Link href={`/apiTMDB/series/${params.id}/companies/${item.id}`}>
//                                                     <img
//                                                         className="img-fluid"
//                                                         src={item.logo_path ? 'https://image.tmdb.org/t/p/w500/' + item.logo_path : (' ')}
//                                                         alt={item.name}
//                                                     />
//                                                 </Link>
//                                                 <Card.Body>
//                                                     <Card.Title>{item.name}</Card.Title>
//                                                 </Card.Body>
//                                             </Card>
//                                         </Col>
//                                     ))}
//                                 </Row>
//                             </Col>
//                         }
//                     </Row>
//                 )
//             }
//         </Pagina>
//     );
// }





// 'use client'
// import { useEffect, useState, useRef } from "react";
// import { Card, Col, Row, Spinner } from "react-bootstrap";
// import Pagina from "@/app/components/Pagina";
// import apiTMDB from "@/app/services/apiTMDB";
// import Link from "next/link";

// export default function SeasonPage({ params }) {
//     const { id, season_number } = params;
//     const [season, setSeason] = useState({});
//     const [episodes, setEpisodes] = useState([]);
//     const [atores, setAtores] = useState([]);
//     const [tv, setTv] = useState({});
//     const [loading, setLoading] = useState(true); // Estado geral de carregamento

//     const observer = useRef(null); // Ref para armazenar o Intersection Observer

//     useEffect(() => {
//         setLoading(true); // Ativa o spinner geral

//         // Buscar detalhes da temporada específica
//         apiTMDB.get(`tv/${id}?language=pt-BR`)
//             .then(res => {
//                 setTv(res.data);
//                 setLoading(false); // Desativa o spinner geral após o carregamento da temporada
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error);
//                 setLoading(false);
//             });

//         // Buscar detalhes dos episódios da temporada
//         apiTMDB.get(`tv/${id}/season/${season_number}?language=pt-BR`)
//             .then(res => {
//                 setSeason(res.data);
//                 setEpisodes(res.data.episodes); // Salva os episódios dessa temporada
//             })
//             .catch(error => {
//                 console.error('Erro ao buscar detalhes da temporada:', error);
//             });

//         // Buscar elenco da série
//         apiTMDB.get(`tv/${id}/credits?language=pt-BR`)
//             .then(res => {
//                 setAtores(res.data.cast);
//             })
//             .catch(error => {
//                 console.error('Erro ao buscar elenco:', error);
//             });
//     }, [id, season_number]);

//     const handleImageLoad = (episodeId) => {
//         const updatedEpisodes = episodes.map(ep => {
//             if (ep.id === episodeId) {
//                 return { ...ep, loaded: true }; // Marca a imagem como carregada
//             }
//             return ep;
//         });
//         setEpisodes(updatedEpisodes);
//     };

//     const handleImageError = (episodeId) => {
//         const updatedEpisodes = episodes.map(ep => {
//             if (ep.id === episodeId) {
//                 return { ...ep, loaded: true }; // Marca como carregado mesmo se houver erro
//             }
//             return ep;
//         });
//         setEpisodes(updatedEpisodes);
//     };

//     // Função para observar quando as imagens estão visíveis
//     const observeImages = (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const image = entry.target;
//                 image.src = image.dataset.src; // Atribui a URL da imagem quando visível
//                 observer.current.unobserve(image); // Para de observar depois de carregar
//             }
//         });
//     };

//     useEffect(() => {
//         observer.current = new IntersectionObserver(observeImages, {
//             root: null, // viewport
//             rootMargin: '0px',
//             threshold: 0.1, // Inicia o carregamento quando 10% da imagem é visível
//         });
//     }, []);

//     return (
//         <Pagina titulo={`${tv.name} - ${season.name}`}>
//             {loading ? (
//                 // Exibe um spinner enquanto a temporada está sendo carregada
//                 <div className="text-center my-5">
//                     <Spinner animation="border" />
//                 </div>
//             ) : (
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
//                         {episodes.length > 0 && (
//                             <Col sm={12}>
//                                 <h3 className="mt-3">Episódios</h3>
//                                 <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                     {episodes.map(episode => (
//                                         <Col key={episode.id} className="mb-3">
//                                             <Card>
//                                                 <Link href={`/apiTMDB/series/${id}/season/${season_number}/episode/${episode.episode_number}`}>
//                                                     {/* Exibe o spinner individual enquanto a imagem do episódio está carregando */}
//                                                     {!episode.loaded ? (
//                                                         <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
//                                                             <Spinner animation="border" />
//                                                         </div>
//                                                     ) : (
//                                                         <img
//                                                             className="img-fluid"
//                                                             data-src={episode.still_path ? 'https://image.tmdb.org/t/p/w500/' + episode.still_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
//                                                             alt={episode.name}
//                                                             ref={(img) => img && observer.current.observe(img)} // Observa a imagem
//                                                             onLoad={() => handleImageLoad(episode.id)} // Marca como carregado ao finalizar o carregamento
//                                                             onError={() => handleImageError(episode.id)} // Marca como carregado mesmo se houver erro
//                                                         />
//                                                     )}
//                                                 </Link>

//                                                 <Card.Body>
//                                                     <Card.Title>{episode.episode_number}. {episode.name}</Card.Title>
//                                                     <Card.Text>
//                                                         {episode.overview || "Sem resumo disponível."}
//                                                     </Card.Text>
//                                                 </Card.Body>
//                                             </Card>
//                                         </Col>
//                                     ))}
//                                 </Row>
//                             </Col>
//                         )}
//                         {atores.length > 0 && (
//                             <Col sm={12}>
//                                 <h3 className="mt-3"><br />Atores</h3>
//                                 <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                     {atores.map(item => (
//                                         <Col
//                                             key={item.id}
//                                             title={item.name}
//                                             className="mb-3" sm={3}
//                                         >
//                                             <Card className="text-center">
//                                                 <Link href={`/apiTMDB/atores/${item.id}`}>
//                                                     <img
//                                                         className="img-fluid"
//                                                         data-src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
//                                                         alt={item.name}
//                                                         ref={(img) => img && observer.current.observe(img)} // Observa a imagem
//                                                     />
//                                                 </Link>
//                                                 <Card.Body>
//                                                     <Card.Title>Nome: {item.name}<br />Personagem: {item.character}</Card.Title>
//                                                 </Card.Body>
//                                             </Card>
//                                         </Col>
//                                     ))}
//                                 </Row>
//                             </Col>
//                         )}
//                         {tv.production_companies && (
//                             <Col sm={12}>
//                                 <h3 className="mt-3"><br />Produtoras</h3>
//                                 <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                     {tv.production_companies.map(item => (
//                                         <Col
//                                             key={item.id}
//                                             title={item.name}
//                                             className="mb-3" sm={3}
//                                         >
//                                             <Card className="text-center">
//                                                 <Link href={`/apiTMDB/series/${id}/companies/${item.id}`}>
//                                                     <img
//                                                         className="img-fluid"
//                                                         data-src={item.logo_path ? 'https://image.tmdb.org/t/p/w500/' + item.logo_path : ' '}
//                                                         alt={item.name}
//                                                         ref={(img) => img && observer.current.observe(img)} // Observa a imagem
//                                                     />
//                                                 </Link>
//                                                 <Card.Body>
//                                                     <Card.Title>{item.name}</Card.Title>
//                                                 </Card.Body>
//                                             </Card>
//                                         </Col>
//                                     ))}
//                                 </Row>
//                             </Col>
//                         )}
//                     </Row>
//                 )
//             )}
//         </Pagina>
//     );
// }





// 'use client'
// import { useEffect, useState } from "react";
// import { Card, Col, Row, Button } from "react-bootstrap";
// import Pagina from "@/app/components/Pagina";
// import apiTMDB from "@/app/services/apiTMDB";
// import Link from "next/link";

// export default function SeasonPage({ params }) {
//     const { id, season_number } = params;
//     const [season, setSeason] = useState({});
//     const [episodes, setEpisodes] = useState([]);
//     const [allEpisodes, setAllEpisodes] = useState([]); // Estado para armazenar todos os episódios
//     const [atores, setAtores] = useState([]);
//     const [tv, setTv] = useState({});
//     const [visibleEpisodes, setVisibleEpisodes] = useState(20); // Número de episódios visíveis

//     useEffect(() => {
//         // Buscar detalhes da temporada específica
//         apiTMDB.get(`tv/${id}?language=pt-BR`)
//             .then(res => {
//                 setTv(res.data); // Acessando a lista de resultados corretamente
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });

//         apiTMDB.get(`tv/${id}/season/${season_number}?language=pt-BR`)
//             .then(res => {
//                 setSeason(res.data);
//                 setAllEpisodes(res.data.episodes); // Armazena todos os episódios
//                 setEpisodes(res.data.episodes.slice(0, 20)); // Exibe apenas os primeiros 20 episódios
//             })
//             .catch(error => {
//                 console.error('Erro ao buscar detalhes da temporada:', error);
//             });

//         apiTMDB.get(`tv/${id}/credits?language=pt-BR`)
//             .then(res => {
//                 setAtores(res.data.cast); // Acessando a lista de resultados corretamente
//             })
//             .catch(error => {
//                 console.error('Erro na requisição:', error); // Tratamento de erro para depuração
//             });
//     }, [id, season_number]);

//     // Função para mostrar mais episódios
//     const showMoreEpisodes = () => {
//         setVisibleEpisodes(prev => {
//             const nextCount = prev + 20;
//             // Limita o número de episódios visíveis ao número total de episódios
//             return Math.min(nextCount, allEpisodes.length);
//         });
//     };

//     // Filtra os episódios visíveis
//     const displayedEpisodes = allEpisodes.slice(0, visibleEpisodes);

//     return (
//         <Pagina titulo={`${tv.name} - ${season.name}`}>
//             {season.id && (
//                 <Row className="mt-3">
//                     <Col sm={4}>
//                         <img
//                             className="img-fluid"
//                             src={season.poster_path ? 'https://image.tmdb.org/t/p/w500/' + season.poster_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'}
//                             alt={season.name}
//                         />
//                     </Col>
//                     <Col sm={8}>
//                         <p><b>Nome da Temporada: </b> {season.name}</p>
//                         <p><b>Data de Lançamento: </b> {season.air_date}</p>
//                         <p><b>Resumo: </b> {season.overview || "Sem resumo disponível."}</p>
//                         <p><b>Quantidade de Episódios: </b> {season.episodes.length}</p>
//                     </Col>
//                     {displayedEpisodes.length > 0 && (
//                         <Col sm={12}>
//                             <h3 className="mt-3">Episódios</h3>
//                             <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                 {displayedEpisodes.map(episode => (
//                                     <Col key={episode.id} className="mb-3">
//                                         <Card>
//                                             <Link href={`/apiTMDB/series/${id}/season/${season_number}/episode/${episode.episode_number}`}>
//                                                 <img
//                                                     className="img-fluid"
//                                                     src={episode.still_path ? 'https://image.tmdb.org/t/p/w500/' + episode.still_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
//                                                     alt={episode.name}
//                                                 />
//                                             </Link>

//                                             <Card.Body>
//                                                 <Card.Title>{episode.episode_number}. {episode.name}</Card.Title>
//                                                 <Card.Text>
//                                                     {episode.overview || "Sem resumo disponível."}
//                                                 </Card.Text>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                             {visibleEpisodes < allEpisodes.length && (
//                                 <Button className="mt-3" onClick={showMoreEpisodes}>
//                                     Veja Mais
//                                 </Button>
//                             )}
//                         </Col>
//                     )}
//                     {atores.length > 0 && (
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
//                                                     src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
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
//                     )}
//                     {tv.production_companies && (
//                         <Col sm={12}>
//                             <h3 className="mt-3"><br />Produtoras</h3>
//                             <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
//                                 {tv.production_companies.map(item => (
//                                     <Col
//                                         key={item.id}
//                                         title={item.name}
//                                         className="mb-3" sm={3}
//                                     >
//                                         <Card className="text-center">
//                                             <Link href={`/apiTMDB/series/${id}/companies/${item.id}`}>
//                                                 <img
//                                                     className="img-fluid"
//                                                     src={item.logo_path ? 'https://image.tmdb.org/t/p/w500/' + item.logo_path : ' '}
//                                                     alt={item.name}
//                                                 />
//                                             </Link>
//                                             <Card.Body>
//                                                 <Card.Title>{item.name}</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </Col>
//                     )}
//                 </Row>
//             )}
//         </Pagina>
//     );
// }








'use client'
import { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Pagina from "@/app/components/Pagina";
import apiTMDB from "@/app/services/apiTMDB";
import Link from "next/link";

export default function SeasonPage({ params }) {

    const { id, season_number } = params;
    const [season, setSeason] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [atores, setAtores] = useState([]);
    const [tv, setTv] = useState({});
    const [visibleEpisodes, setVisibleEpisodes] = useState(20); // Número de episódios visíveis

    useEffect(() => {
        // Buscar detalhes da temporada específica
        apiTMDB.get(`tv/${id}?language=pt-BR`)
            .then(res => {
                setTv(res.data); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });

        apiTMDB.get(`tv/${id}/season/${season_number}?language=pt-BR`)
            .then(res => {
                setSeason(res.data);
                setEpisodes(res.data.episodes); // Salva os episódios dessa temporada
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes da temporada:', error);
            });

        apiTMDB.get(`tv/${id}/credits?language=pt-BR`)
            .then(res => {
                setAtores(res.data.cast); // Acessando a lista de resultados corretamente
            })
            .catch(error => {
                console.error('Erro na requisição:', error); // Tratamento de erro para depuração
            });
    }, [id, season_number]);

    // Função para mostrar mais episódios
    const showMoreEpisodes = () => {
        setVisibleEpisodes(prev => prev + 20);
    };

    // Filtra os episódios visíveis
    const displayedEpisodes = episodes.slice(0, visibleEpisodes);

    return (
        <Pagina titulo={`${tv.name} - ${season.name}`}>
            {season.id && (
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
                    {displayedEpisodes.length > 0 && (
                        <Col sm={12}>
                            <h3 className="mt-3">Episódios</h3>
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-3 mt-3">
                                {displayedEpisodes.map(episode => (
                                    <Col key={episode.id} className="mb-3">
                                        <Card>
                                            <Link href={`/apiTMDB/series/${id}/season/${season_number}/episode/${episode.episode_number}`}>
                                                <img
                                                    className="img-fluid"
                                                    src={episode.still_path ? 'https://image.tmdb.org/t/p/w500/' + episode.still_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
                                                    alt={episode.name}
                                                />
                                            </Link>

                                            <Card.Body>
                                                <Card.Title>{episode.episode_number}. {episode.name}</Card.Title>
                                                <Card.Text>
                                                    {episode.overview || "Sem resumo disponível."}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            {visibleEpisodes < episodes.length && (
                                <Button className="mt-3" onClick={showMoreEpisodes}>
                                    Veja Mais
                                </Button>
                            )}
                        </Col>
                    )}
                    {atores.length > 0 && (
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
                                                    src={item.profile_path ? 'https://image.tmdb.org/t/p/w500/' + item.profile_path : 'https://www.thetvdb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
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
                    )}
                    {tv.production_companies && (
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
                                            <Link href={`/apiTMDB/series/${id}/companies/${item.id}`}>
                                                <img
                                                    className="img-fluid"
                                                    src={item.logo_path ? 'https://image.tmdb.org/t/p/w500/' + item.logo_path : ' '}
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
                    )}
                </Row>
            )}
        </Pagina>
    );
}
