import "./App.css";
import NavBars from "./components/NavBars";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBack from "./components/ParticlesBack";
import Footer from "./components/Footer";
import { IntlProvider, FormattedMessage } from "react-intl";
import MensajesIngles from "./lang/en-US.json";
import Experiencie from "./components/Experiencie";

function App() {
  return (
    <IntlProvider locale="en-US" messages={MensajesIngles}>
      <div className="App">
        <ParticlesBack />
        <NavBars />
        <Banner />
        <Skill />
        <Experiencie />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
