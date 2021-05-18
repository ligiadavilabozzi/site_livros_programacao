import React from 'react'
function Home(){
    return(
        <>
        <h2>Últimos lançamentos</h2>
        <div className="card">
            <div className="thumb">
                <img src="../imagens/capas/9788575228142.jpg" alt=""></img>
            </div>
            <div className="detalhes">
                <h3>Padrões para Kubernetes</h3>
                <p>O modo como...</p>
                <a href="#">Leia mais &gt;</a>
            </div>
        </div>
        <div className="card">
            <div className="thumb">
                <img src="./imagens/capas/9788575228074.jpg" alt=""></img>
            </div>
            <div className="detalhes">
                <h3>Introdução ao Pentest - 2ª edição</h3>
                <p>Introdução ao Pentest...</p>
                <a href="#">Leia mais &gt;</a>
            </div>
        </div>
        </>
    )
}

export default Home;
