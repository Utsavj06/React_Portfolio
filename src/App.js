import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Qualification from "./Components/Qualification";
import Skills from "./Components/Skills";
import Training from "./Components/Training";
import Strengths from "./Components/Strengths";
import Hobbies from "./Components/Hobbies";
import { Pi } from "./Components/Pi";

function App() {
  return (
    <div className="App">
         <NavBar />
         <Routes>
           <Route path="/react_portfolio" element={<Home />} />
           <Route path="/qualification" element={<Qualification />} />
           <Route path="/skills" element={<Skills/>} />
           <Route path="/training_and_certification" element={<Training />} />
           <Route path="/strengths" element={<Strengths/>} />
           <Route path="/hobbies" element={<Hobbies/>} />
           <Route path="/pi" element={<Pi/>} />       
         </Routes>
    </div>
  );
}

export default App;
