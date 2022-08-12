import React from 'react';
import "./Skills.css";
import css from "../image/css.png";
import JS from "../image/Js.png";
import Reactj from "../image/Reactjs.png";
import tailwind from "../image/tailwind.png";
import Typescript from '../image/Typescript.png'
import material from '../image/material-ui.png'


const Skills = () => {
    return (
        <div className="Skills">
            <div className="center">
                <img src={css} alt="HTML and CSS" height="200" width="200" />
                <h1 className="">HTML and CSS</h1>
            </div>
            <div className="center">
                <img src={JS} alt="Javascript" height="200" width="200" />
                <h1 className="">JavaScript</h1>
            </div>
            <div className="center">
                <img src={Reactj}  alt="React.JS" height="200" width="200" />
                <h1 className="">React Js</h1>
            </div>
            <div className="center">
                <img src={tailwind} alt="Tailwind CSS" height="200" width="200" />
                <h1 className="">Tailwind CSS</h1>
            </div> 
            <div className="center">
                <img src={Typescript} alt="Typescript" height="200" width="200" />
                <h1 className="">Typescript</h1>
            </div>
            <div className="center">
                <img src={material} alt="material" height="200" width="200" />
                <h1 className="">Material UI</h1>
            </div>              
        </div>
    )
}

export default Skills
