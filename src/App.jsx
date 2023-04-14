import "./App.css";
import NavBars from "./components/NavBars";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBack from "./components/ParticlesBack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ParticlesBack />
      <NavBars />
      <Banner />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
