import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import styles from "../page.module.css";
import Pagina from "../components/Pagina";

export default function Fundamentos() {

    return (
        <>
            <Pagina titulo="Fundamentos">
                <Container>
                    <Cabecalho />
                    <Alert> Atenção Preste muito atenção</Alert>
                    <h1>Fundamentos</h1>
                    <p>Sucesso</p>
                    <Cabecalho />
                    <a href="/"> Página Home</a><br />
                    <Link href="/clientes"> Página Clientes</Link><br />
                </Container>
            </Pagina>
        </>
    )
}
