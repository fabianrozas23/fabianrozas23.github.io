import React from 'react';
import web from './imagenes/web.png';
import './Estilo.css';

export const Curso = (props) => (
    <div className="App">
    <div ><img src={web} alt= 'imagen del curso' height= '161'  width= '765' centered/>
    </div>
    <h1 className="new-line">BIENVENIDOS AL APARTADO DEL CURSO</h1>
    <div className="container">      
          <p> Este es mi primer sitio web que he creado, y lo he realizado gracias a las asignaturas de Arquitectura de Software
            y Desarrollo Web.  
            </p>

          <p>Espero que con el tiempo pueda aprendar, crear e implementar de mejor manera
            Semantic UI y todos los componentes y herramientas que ayudan a la creación y mantención
            de un sitio web. Esta asignatura es una de mis favoritas por que puedo crear y practicar
            para aprender cada dia mas.
         </p>
            <p>Me ha gustado mucho la forma en que se llevarón las clases y todas las herramientas que 
                tuvimos para poder desarrollar y aprender. Además que las clases pudiesen quedar grabadas 
                con demostraciones realizadas por el profesor, hizo mucho más fácil el manejo y el entendimiento
                de cada uno de los componentes del curso.
            </p>
            <p>A continuación se mostrarán los puntos fundamentales que se vieron en cada una de las asignaturas.</p>

        <h2>Desarrollo Web</h2>
         <p>
         El objetivo es que al finalizar el curso, el alumno pueda comprender los lenguajes y librerías 
         imperantes en el mundo del desarrollo web front-end a través de diversos talleres prácticos.
         </p>
         <h2>¿Que se aprendió?</h2>
         <h3>REACT</h3>
         <p>
             <ul>
             <li type="disc">Introducción a React.</li>
             <li type="disc">El caso vercel y la orientación a lo instantaneo y los buscadores.</li>
             <li type="disc">Breve introducción frameworks CSS (SCSS, SASS, Styled Components).</li>
             <li type="disc">Normativas de diseño existentes, Material UI, Semantic UI, etc. </li>
             <li type="disc">Formas de desarrollo en React, Clases vs Funciones.</li>
             </ul>
        </p>

        <h3>REACT HOOKS</h3>

        <p>
            <ul>
            <li type="disc">Propiedades y Estados.</li>
            <li type="disc">JSX.</li>
            <li type="disc">UseHooks.</li>
            <li type="disc">React Routing.</li>
            <li type="disc">React Context.</li>
            <li type="disc">Redux, modelo inmutable.</li>
            <li type="disc">GraphQL.</li>
            <li type="disc">Next.js</li>
            <li type="disc">JEST</li>
            </ul>
        </p>

        <h3>FLUTTER</h3>

        <p>
            <ul>
            <li type="disc">Ejemplo práctico y comparaciones.</li>
            </ul>
        </p>

         <h2>Arquitectura de Software</h2>
        <p>El objetivo es que al finalizar el curso, el alumno comprenda la integración de la nube, 
            con metodologías Devops, con talleres prácticos en cada clase.
            </p>

            <h2>¿Que se aprendió?</h2>
            <h3>Arquitectura Inmutable y distribuida</h3>
            <p>
                <ul>
                <li type="disc">Introducción al Open Source y su modelo de negocio (Innovación disruptiva).</li>
                <li type="disc">Inmutabilidad y la nueva computación distribuida</li>
                <li type="disc">Git</li>
                <li type="disc">Docker</li>
                <li type="disc">Blockchain</li>
                </ul>
            </p>

            <h3>Metodologías</h3>
            <p>
                <ul>
                <li type="disc">Patrones de diseño (Inyección de dependencias, GOF, DRY, CodeSmell, etc).</li>
                <li type="disc">TDD</li>
                </ul>
            </p>

            <h3>DEVOPS</h3>
            <p>
                <ul>
                <li type="disc">Metodologías ágiles, el Agile Manifesto.</li>
                <li type="disc">Scrum sobre Azure Devops</li>
                <li type="disc">Integración entrega continua.</li>
                <li type="disc">Arquitectura de componentes.</li>
                </ul>
            </p>

            <h3>SERVICIOS EN LA NUBE</h3>
            <p>
                <ul>
                <li type="disc">Serverless Architecture.</li>
                <li type="disc">Azure functions.</li>
                <li type="disc">Diseño y modelado de bases de datos documentales.</li>
                <li type="disc">Bases de datos documentales en la nube (En memoria, de busqueda, de persistencia).</li>
                <li type="disc">Costos de la nube, modelos hibridos..</li>
                </ul>
            </p>
    </div>
</div>

)