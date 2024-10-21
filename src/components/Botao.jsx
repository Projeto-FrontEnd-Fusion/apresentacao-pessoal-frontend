import React from 'react'
import './Botao.css'

export default function Botao(props) {
  return (
    <button className='botao'><a href={props.link} target='blank'>{props.texto}</a></button>
  )
}
