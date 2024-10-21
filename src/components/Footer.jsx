import React from 'react'
import './Footer.css'
import { MdCopyright } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import linkedin from '../imagens/linkedin.svg'
import github from '../imagens/github.svg'
import whats from '../imagens/whats.svg'



export default function Footer() {
  return (
    <footer className="footer">
        <h2>Desenvolvido por Elaine Tavares <MdCopyright /> 2024</h2> 
        <div className="container">
            <div className="contatos">
                <div className="telefone">
                    <CiPhone size={25} />
                    <a href="https://api.whatsapp.com/send/?phone=5521984510746&text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+serv&type=phone_number&app_absent=0" target='blank'>(21) 98451-0746</a>
                </div>
                <div className="email">
                    <MdOutlineMail size={25} />
                    <a href="mailto:elainetavares.dev@gmail.com" target='blank'>elainetavares.dev@gmail.com</a>
                </div>
            </div>
            <div className="redes">
            <a href="www.linkedin.com/in/elaine-tavares-b5797b1b0" target='blank'><img className='linkedin' src={linkedin} alt="linkedin" /></a>
            <a href="https://github.com/ElaineTavares" target='blank'><img className='github' src={github} alt="github" /></a>
            <a href="https://api.whatsapp.com/send/?phone=5521984510746&text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+serv&type=phone_number&app_absent=0" target='blank'><img className='whats' src={whats} alt="whatsapp" /></a>
            </div>
        </div>
    </footer>
  )
}
