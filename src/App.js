import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Project from "./components/Project";

import './components/css/output.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="Project" element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App;