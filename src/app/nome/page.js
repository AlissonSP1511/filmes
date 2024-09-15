'use client'

import { Button } from "react-bootstrap"
import Pagina from "../components/Pagina"
import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('Alisson')

    function alterarNome() {
        const novoNome = nome == 'Alisson' ? 'Alisson da Silva Pereira' : 'Alisson'
        setNome(novoNome)
    }
    return (
        <main >
            <Pagina titulo={"Nome: " + nome}>
                <h1>{nome}</h1>
                <Button onClick={alterarNome} variant="primary">Alterar Nome</Button>{' '}
            </Pagina>
        </main>
    );
}
