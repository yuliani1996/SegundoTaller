import React from 'react';
import Equipo from '../components/Equipo';
import FotoAnyi from "../assets/imagenes/FotoAnyi.png";
import FotoAndrea from "../assets/imagenes/FotoAndrea.png";
import '../App.css';



function Home() {
    return (
        <div className='home'>
        <h1>Proyecto de Listado y Modificación de Productos </h1>
        <h3>Miembros del Equipo</h3>
            <Equipo
                title="Anyi Chamorro"
                imageSrc={FotoAnyi}
                description="Estudiante de Análisis y Desarrollo de Software, con una gran pasión por crear soluciones tecnológicas que impulsen la innovación."
                githubLink="https://github.com/yuliani1996"
                linkedinLink="https://linkedin.com/in/usuario"
            />
            <Equipo
                title="Andrea Contreras"
                imageSrc={FotoAndrea}
                description="Estudiante de Análisis y Desarrollo de Software, con enfoque en el diseño, implementación y optimización de aplicaciones tecnológicas."
                githubLink="https://github.com/AndreaCSalazar"
                linkedinLink=""
            />
            
        </div>
    );
}

export default Home;
