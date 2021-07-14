import React from 'react';
import redes from './imagenes/redes.png';
import insta from './imagenes/insta.png';
import face from './imagenes/face.png';
import instafotos from './imagenes/instafotos.png';
import github from './imagenes/github.png';
import azure from './imagenes/azure.png';
import curso from './imagenes/curso.png';

export const Rss = () => (
  <div className="App">
    <div className="new-line"><img src={redes} alt="Redes sociales" className="line-jump"/></div>
    <h1></h1>
    <div className="container">
      <div className="centering">
        <h2>COVIDPEST</h2>
            <h3>Habilidades, estadisticas e Información del personaje</h3>
            <p>
                <ul>
                <li type="disc">Habilidad especial: Ataque Rapido de cuarentena</li>
                <li type="disc">golpes: Golpe de tos</li>
                <li type="disc">patada: Patada infectada</li>
                <li type="disc">salto: Salto del contagio</li>
                <li type="disc">Estadisticas: 18-fuerza, 8-destreza,  19-vitalidad, 0-magia, 96%-ataque, 60%-defensa</li>
                </ul>
            </p>
      </div>
    </div>
  </div>
)