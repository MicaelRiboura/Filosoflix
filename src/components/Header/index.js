import React from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <nav className="Header">
            <div className="menu">
                <a href="/">
                    <img className="Logo" src={Logo} alt="Micaelflix" />
                </a>
                <span className="item">Início</span>
                <span className="item">Clássicos</span>
                <span className="item">Brasileiros</span>
            </div>
        </nav>
    )
}