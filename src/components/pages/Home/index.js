import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div className="banner">
            <div className="info">
                <h2>Friedrich Nietzsche por Scarlett Marton</h2>
                <h3>Quem Somos Nós?</h3>
                <p>Esta semana, o Quem Somos Nós? tem a honra de receber Scarlett Marton, professora de história da filosofia e considerada uma das maiores conhecedoras brasileiras do filósofo alemão Friedrich Nietzsche. Ela dá continuidade à nova série de conversas com especialistas na obra de alguns dos maiores pensadores da história da humanidade.</p>
            </div>
            {/* <div className="video">
            <iframe height="315" src="https://www.youtube.com/embed/5L2K6HKrEyA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
        </div>
    )
}