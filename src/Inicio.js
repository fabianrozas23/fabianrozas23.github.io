import React from 'react';
import yo from './imagenes/yo.png';
import './inicio.css';

export const Inicio = (props) => (
    <div className="App">
    <div ><img src={yo} alt= 'imagen del creador' height= '700'  width= '400' centered />
    </div>
    <h1 className="new-line">Bienvenidos a Extreme Fighter</h1>
    <div className="container">
        <p>Este juego de lucha se basa en manejar a un luchador, ya sea dando golpes, patadas, saltos o usando poderes especiales para derrotar
        a tu oponente. Cada personaje tiene su propio poder magico o destreza que lo caracteriza. Puedes obtener puntos de habilidad e intercambiar
        poderes o mejorar habilidades. Derrota a tu enemigo antes que sea tarde!!!!  
        </p>

        <p>Extreme Fighter arcade tiene para ti la más importante acción de estrategia para derrotar a los demás luchadores. Te enfrentaras con 
        diferentes enemigos a lo largo de tu camino, podrás seleccionar armaduras que complementen a tu luchador y llevarte la victoria.
        </p>

             <p> QUE ESPERAS PARA UNIRTE A ESTA FANTÁSTICA COMUNIDAD Y SER EL MEJOR LUCHADOR DE LA HISTORIA? !!!!!!!!!!!!
            </p>
    </div>
</div>

)