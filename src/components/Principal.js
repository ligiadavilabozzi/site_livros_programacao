import React from 'react'
import Home from "./Home"

function Principal(){
    const isbn = "ISBN: 111111111"
    const titulo = "React"
    const autor = "Maujor"
    const tituloPagina = "Últimos Lançamentos"
    return(
        <main className="principal">
            <Home
            isbn={isbn}
            titulo={titulo}
            autor={autor}
            tituloPagina={tituloPagina} />
        </main>
    )
}
export default Principal