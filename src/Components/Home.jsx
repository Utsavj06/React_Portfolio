import React from 'react';
import "./Home.css";
import li from "../image/174857.png";

const Home = () => {
    return (
        <div className="home">
          <div>          
              <h1 className="first">Utsav Jaiswal</h1>
              <h1 className="second"> <a className="image" href="https://www.linkedin.com/in/utsav-jaiswal-a2200ab8/"><img src={li} alt="LinkedIN" height="30 px" width="30 px" /></a>1413210176</h1>
          </div>  
          <div className="below">
              <h1 className="third">Always be Happy</h1>
          </div>
        </div>
    )
}

export default Home;
