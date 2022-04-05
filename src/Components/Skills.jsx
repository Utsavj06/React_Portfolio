import React from 'react';
import "./Skills.css";
import C from "../image/c++.jpg";
import css from "../image/css.png";
import JS from "../image/Js.png";
import Reactj from "../image/Reactjs.png";
import tailwind from "../image/tailwind.png";
import JQuery from "../image/jquery.png";


const Skills = () => {
    return (
        <div className="Skills">
            <div className="center">
                <img src={css} alt="C_and_C++" height="310" width="310" />
                <h1 className="">HTML and CSS</h1>
            </div>
            <div className="center">
                <img src={JS} alt="C_and_C++" height="310" width="310" />
                <h1 className="">JavaScript</h1>
            </div>
            <div className="center">
                <img src={Reactj}  alt="C_and_C++" height="310" width="310" />
                <h1 className="">React Js</h1>
            </div>
            <div className="center">
                <img src={tailwind} alt="C_and_C++" height="310" width="310" />
                <h1 className="">Tailwind CSS</h1>
            </div>               
        </div>
    )
}

export default Skills
