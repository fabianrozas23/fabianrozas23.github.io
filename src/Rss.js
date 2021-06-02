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
    <h1>Visita mis redes sociales y más!</h1>
    <div className="container">
      <div className="centering">
        <div new-line>
            <a href="https://www.instagram.com/fabianrozas_/"> <img src={insta} alt="instagram Fabián" height= '161'  width= '765' /></a>
        </div>
        <div new-line>
            <a href="https://www.instagram.com/first.cam/"> <img src={instafotos} alt="Instagram fotos" height= '161'  width= '765' /></a> 
        </div>
        <div new-line>
            <a href="https://www.facebook.com/profile.php?id=100009189151224"> <img src={face} alt="Facebook Fabián" height= '200'  width= '765' /></a> 
        </div>
        <div new-line>
            <a href="https://github.com/fabianrozas23"> <img src={github} alt="Github Fabián" height= '200'  width= '765' /></a> 
        </div>
        <div new-line>
            <a href="https://dev.azure.com/fabianrozas"> <img src={azure} alt="Azure Fabián" height= '161'  width= '765' /></a> 
        </div>
        <div new-line>
            <a href="https://fabianrozas.me/"> <img src={curso} alt="Página del curso" height= '180'  width= '765' /></a> 
        </div>
      </div>
    </div>
  </div>
)