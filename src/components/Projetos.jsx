import React from 'react'
import './Projetos.css'
import db from '../db.json'
import Botao from './Botao'

export default function Projetos(props) {
  return (
    <section className="projetos" id='projetos'>
        <h2>Projetos</h2>
        <div className="container">
            {db.map((item) => {
                return <div className="card">
                            <img src={item.capa} alt={item.titulo} />
                            <div className="texto">
                                <h3>{item.titulo}</h3>
                                <p className='descricao'>{item.descricao}</p>
                                <p> <strong>Tecnologias: </strong>{item.tecnologias}</p>
                            </div>
                            <Botao className="botao" texto="Ver projeto" link={item.link}/>
                        </div>
            })}
            
            
        </div>
    </section>
  )
}
