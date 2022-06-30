import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css"
import {GiHamburgerMenu} from "react-icons/gi";
import Home from './Components/Home';

const NavBar = () => {

    const [hamburgger, setHamburgger]=useState(false);

    return (
        <div className="parentName">
            <div className={hamburgger ? "mymenu mymenu-mobile":"mymenu"} onClick={()=>setHamburgger(false)}>
                <Link exact to="/react_portfolio">Home |</Link>
                <Link exact to="/qualification">Qualification |</Link>
                <Link exact to="/skills">Skills |</Link>
                <Link exact to="/training_and_certification">Training/Certification |</Link>
                <Link exact to="/strengths">Strengths |</Link>
                <Link exact to="hobbies/">Hobbies |</Link>
                <Link exact to="/Pi">Personal Information |</Link>
            </div>
            <div className="hambugger" onClick={()=>setHamburgger(!hamburgger)}>
                <GiHamburgerMenu />
            </div> 
                     
        </div>
    )
}

export default NavBar;
