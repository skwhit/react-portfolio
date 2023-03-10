import "./App.css";
import Projects from "./components/projects/Projects";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Resume from "./components/resume/Resume";
import { Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <div className="app">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        
        {/* <ProjectList/> */}
      </main>
    </div>
  );
}

export default App;
