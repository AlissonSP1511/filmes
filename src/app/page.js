import Image from "next/image";
import styles from "./page.module.css";
import Cabecalho from "./components/Cabecalho";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <main >
      <Pagina titulo="Home">
        <Button variant="primary">Primary</Button>{' '}
        <Cabecalho />

        <Link href="/fundamentos"> Página Fundamentos</Link><br />
        <Link href="/clientes"> Página Clientes</Link><br />
      </Pagina>
    </main>
  );
}
