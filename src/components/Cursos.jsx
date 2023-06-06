/* eslint-disable react/prop-types */
import './Cursos.css'
import {useState} from 'react';
import ShowDescription from './showDescription';


function Cursos() {
    const cursos = [
        {
            id: 0,
            title: 'Introdução ao Desenvolvimento Web com React',
            description: 'Descrição 1'
        },
        {
            id: 1,
            title: 'Desenvolvimento Mobile com React Native',
            description: 'Descrição 2'
        },
        {
            id: 2,
            title: 'Introdução à Impressão 3D',
            description: 'Descrição 3'
        },
        {
            id: 3,
            title: 'Introdução à Robótica',
            description: 'Descrição 4'
        }
    ]

    const [title, setTitle] = useState(cursos[0].title)
    const [description, setDescription] = useState(cursos[0].description)
    const [activeId, setActiveId] = useState(null);

    const handleClick = (title, description, index) => {
      if (activeId === index) {
          setActiveId(null)
      } else {
          setActiveId(index)
      }
      setTitle(title)
      setDescription(description)
    };

    return (
        <div id="Cursos">
            <h1>Cursos</h1>
            <div className="cursos-content">
                <ul>
                    {cursos.map ((curso, idx)=> {
                     return <li 
                        className={`list-item ${activeId === idx ? "on" : ""}`} 
                        key={curso.title} onClick={() =>{ handleClick(curso.title,curso.description, idx)}}>
                        {curso.title}
                    </li>
                    })}
                 </ul>
                <ShowDescription title={title}  description={description}/>
            </div>
        </div>
  )
}

export default Cursos;
