import "./App.css";
import About from "./pages/About";
import Intro from "./pages/Intro";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="container">
      <div className="menu">
        <a href="#homePage">
          <div className="odd">Home</div>
        </a>
        <a href="#secondPage">
          <div className="even">About</div>
        </a>
        <a href="#projects">
          <div className="odd">Projects</div>
        </a>
      </div>
      <Intro />
      <About />
      <ProjectsPage />
    </div>
  );
}

export default App;
