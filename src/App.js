import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Sosmed from "./components/Sosmed";
import Project from "./components/Project";
import Certificate from "./components/Certificate";

import './components/css/output.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Sosmed" element={<Sosmed />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Certificate" element={<Certificate />} />
      </Routes>
    </Router>
  )
}

export default App;