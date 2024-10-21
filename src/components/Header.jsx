import React from 'react'
import './Header.css'
import { NavLink } from 'react-bootstrap'
import linkedin from '../imagens/linkedin.svg'
import github from '../imagens/github.svg'
import whats from '../imagens/whats.svg'
import menu from '../imagens/menu_burger.svg'
//Importar bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'



export default function Header() {

  return (
    <header className='header'>
        <div className="dropdown">
            <a className="btn btn-secondary dropdown" href="#" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
            <img className='menu_burger' src={menu} alt="menu" />
            </a>
            <ul className="dropdown-menu">
                <li><NavLink className='link' href='#apresentacao'>Apresentação</NavLink></li>
                <li><NavLink className='link' href='#projetos'>Projetos</NavLink></li>
                <li><NavLink className='link' href='#tecnologias'>Tecnologias</NavLink></li>
                <li><NavLink className='link' href='#linhaDoTempo'>Linha do Tempo</NavLink></li>
            </ul>
        </div>
        <div className='links'>
            <NavLink className='link' href='#apresentacao'>Apresentação</NavLink>
            <NavLink className='link' href='#projetos'>Projetos</NavLink>
            <NavLink className='link' href='#tecnologias'>Tecnologias</NavLink>
            <NavLink className='link' href='#linhaDoTempo'>Linha do Tempo</NavLink>
        </div>
        <div className="redes">
            <a href="www.linkedin.com/in/elaine-tavares-b5797b1b0" target='blank'><img className='linkedin' src={linkedin} alt="linkedin" /></a>
            <a href="https://github.com/ElaineTavares" target='blank'><img className='github' src={github} alt="github" /></a>
            <a href="https://api.whatsapp.com/send/?phone=5521984510746&text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+serv&type=phone_number&app_absent=0" target='blank'><img className='whats' src={whats} alt="whatsapp" /></a>
        </div>    
    </header>
  )
}
