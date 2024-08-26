import React from 'react'
import './Apresentacao.css'
import Botao from './Botao'
import { useEffect, useState } from 'react'
import html from '../imagens/tecnologia_html.svg'
import css from '../imagens/tecnologia_css.svg'
import js from '../imagens/tecnologia_js.svg'
import react from '../imagens/tecnologia_react.svg'
import github from '../imagens/tecnologia_github.svg'

export default function Apresentacao() {
  const [text, setText] = useState('');
  const toRotate = ['Elaine Tavares!', 'Desenvolvedora Front End!'];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  //CLEAN UP FUNCTION
  useEffect(()=> {
    let ticker = setInterval(()=>{
      toType()
    }, delta)
    return ()=> {clearInterval(ticker)}
  }, [text])

  const toType = ()=> {
    let i = loop % toRotate.length;
    let fullText = toRotate[i]
    let upDatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

    setText(upDatedText);

    if(!isDeleting && upDatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && upDatedText === '') {
        setIsDeleting(false);
        setDelta(period);
        setLoop(loop+1);
    }
  }

  return (
    <section className="apresentacao" id='apresentacao'>
        <div className='container'>
            <h2>Bem-vindo ao meu Portfólio!</h2>
            <div className='cursor'></div>
            <h4>Olá, eu sou <span>{text}</span></h4>   
            <p>Sou formada em Tecnologia em Gestão Financeira e, ao longo do tempo, desenvolvi uma paixão pelo Desenvolvimento Web, o que me levou a buscar uma transição de carreira para essa área. Tenho competências em GitHub, HTML, CSS, JavaScript e React, que são as principais ferramentas que utilizo para construir soluções web. <br />
              Além disso, tive a oportunidade de atuar como voluntária em Desenvolvimento Front-end no Instituto Capoeira Social, onde pude aplicar e aprimorar meus conhecimentos em um projeto real. <br /> Atualmente, sou universitária no curso Tecnólogo de Sistemas para Internet, o que reforça minha dedicação e compromisso em consolidar minha carreira na área de Desenvolvimento Web.
            </p>
            <Botao texto="Currículo" link="https://drive.google.com/file/d/1wKbyEV9JdjAJgWDfTpMNsyhEH2DMRILb/view?usp=sharing"/>
        </div> 
        
    </section>
  )
}
