import React from 'react';
import yo from './imagenes/yo.png';
import './inicio.css';

export const Inicio = (props) => (
    <div className="App">
    <div ><img src={yo} alt= 'imagen del creador' height= '700'  width= '400' centered />
    </div>
    <h1 className="new-line">Bienvenidos a mi sitio web</h1>
    <div className="container">
        <p>Mi nombre es Fabián Andrés Rozas Alfaro, tengo 23 años y estoy estudiando Ingenieria Civil en Informatica en la Universidad de Valparaiso.
        Me gusta escuchar música, salir con mis amigos y ver series. Me considero una persona introvertida, pero cuando me conoces soy el más 
        simpatico del mundo :).
        </p>

        <p>Además de la Informatica me gusta mucho la fotagrafia. En el menú superior podrás encontrar mis redes sociales y un apartado sobre mis cursos
            que me ayudaron a diseñar este sitio web.
        </p>

             <p> Gracias por la visita y espero que vuelvas pronto !!!!
            </p>
    </div>
</div>

)