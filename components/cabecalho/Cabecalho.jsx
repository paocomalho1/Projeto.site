import React, { Component } from 'react';
import logo from "../../assets/images/logo.svg"
import ceta from "../../assets/images/icon-arrow-down.svg"


class Cabecalho extends Component {
    animacao(){
        const tela = document.querySelector('#tela')
        const triangulo = document.querySelector('#triangulo')
        
        if(tela.classList.contains(('slide-in'))){
            tela.classList.remove('slide-in')
            tela.classList.add('slide-out')
            triangulo.classList.remove('slide-in-t')
            triangulo.classList.add('slide-out-t')
        }else{
            tela.classList.add('slide-in')
            tela.classList.remove('slide-out')
            triangulo.classList.add('slide-in-t')
            triangulo.classList.remove('slide-out-t')
            
            
        }
    }
    render() { 
        return (
            <header className="cabecalho">
                <div className="cabecalho__conteiner">
                    <a href=""><img src={logo} alt="" className="logo" /></a>
                    <nav className="cabecalho__menu menu">
                        <ul className="menu__itens">
                            <li className="menu__item"><a href="" className="menu__link">About</a></li>
                            <li className="menu__item"><a href="" className="menu__link">Services</a></li>
                            <li className="menu__item"><a href="" className="menu__link">Projects</a></li>
                            <li className="menu__item"><a href="" className="menu__link">Contact</a></li>
                        </ul>
                        <a className="menu__hamburger">
                            <span className="menu__hamburger-bar"></span>
                            <span className="menu__hamburger-bar"></span>
                            <span className="menu__hamburger-bar"></span>
                        </a>
                    </nav>
                </div>
                <div className="conteiner">
                    <h1 className="cabecalho__titulo">We are creatives</h1>
                    <img src={ceta} alt="" className="cabecalho__ceta" />
                </div>
                <div className="conteiner__triangulo" id='triangulo'></div>
                <div className="tela" id='tela'>
                    <nav className="tela__menu">
                        <ul className="tela__menu__itens">
                            <li className="tela__menu__item"><a href="" className="tela__menu__link">About</a></li>
                            <li className="tela__menu__item"><a href="" className="tela__menu__link">Services</a></li>
                            <li className="tela__menu__item"><a href="" className="tela__menu__link">Projects</a></li>
                            <li className="tela__menu__item"><a href="" className="tela__menu__link">Contact</a></li>
                        </ul>
                    </nav>
                </div>
    
            </header>
        );
    }
}
 
export default Cabecalho;