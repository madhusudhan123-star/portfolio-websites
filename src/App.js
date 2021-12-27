import "./App.css";
import ParticleBackground from "./componends/ParticleBackground";
import Nav from "./componends/Nav";
import Home from "./componends/Home";
import About from "./componends/About";
import Project from "./componends/Project";
import Contact from "./componends/Contact";
function App() {
  return (
    <div>
      <div>
        <ParticleBackground />
        <Nav />
        <Home />
      </div>
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
