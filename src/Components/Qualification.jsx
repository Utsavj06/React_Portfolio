import React from 'react'
import Gniot from "../image/gniot.png";
import "./Qualification.css";
import KV from "../image/kv.jpg";

const Qualification = () => {
    return (
        <div>
            <div>
                <h1 className="title">Graduation</h1>
                <div className="college">
                    <img src={Gniot} alt="GNIOT" height="250" width="400" />
                    <div className="education">
                        <h1>Got Graduate from</h1>
                        <h2>Greater Noida Institute of Technology</h2>
                        <h3>in B.Tech from Computer Science In 2020 with 65.82 %</h3>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="title">Schooling</h1>
                <div className="college">
                    <img src={KV} alt="Kendriya Vidyalaya" width="400" height="250" />
                    <div className="education">
                        <h1>Done my schooling from</h1>
                        <h2>Kendriya Vidyalaya Mughalsarai</h2>
                        <h3>With these Percentage;</h3>
                        <ul>
                            <li><h2>Senior Secondary : 7.8 CGPA in year 2012.</h2></li>
                            <li><h2><b>High Secondary :</b> 64% in year 2014.</h2></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualification;
