'use client'

import { Button } from "react-bootstrap"
import Pagina from "../components/Pagina"
import { useState } from "react"

export default function Page() {
    const [valor, setValor] = useState(0)

    function almentarValor() {
        let novoValor = valor + 1
        setValor(novoValor)
    }
    function diminuirValor() {
        let novoValor = valor - 1
        setValor(novoValor)
    }





    return (
        <main >
            <Pagina titulo={"Valor: " + valor}>
                <Button onClick={almentarValor} variant="primary">Almentar Valor</Button>{' '}
                <h1>{valor}</h1>
                <Button onClick={diminuirValor} variant="primary">Diminuir Valor</Button>{' '}
            </Pagina>
        </main>
    );
}
