import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Works from "./components/Works";

import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import "./App.css";
import Test from "./components/works/test";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Works />
        <Test />
      </div>
    </>
  );
}

export default App;
