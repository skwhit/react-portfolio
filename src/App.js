import Particles from "./components/particles";
import "./App.css";
import ProjectList from "./components/projects/ProjectList";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="app">
      <Particles />
      <main>
        <Landing />
        {/* <ProjectList/> */}
      </main>
    </div>
  );
}

export default App;
