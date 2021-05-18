import React from 'react'

function Home(props){
    return(
        <>
            <h3>{props.tituloPagina}</h3>
            <p>
                ISBN: {props.isbn};
                Título: {props.titulo};
                Autor: {props.autor}
            </p>
        </>
    )
}

export default Home;
