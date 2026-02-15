import React from "react";
import "./App.css";
import "./parts/Projects.css";
import "./parts/Hero.css";
import Header from "./parts/Header";
import About from "./parts/About";
import Projects from "./parts/Projects";
import Footer from "./parts/Footer";
import Tech from "./parts/Tech";
import Hero from "./parts/Hero";
import Contacts from "./parts/Contacts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Hero />
        <Projects />
        <Tech />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
