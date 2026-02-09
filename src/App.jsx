import React from "react";
import "./App.css";
import Header from "./parts/Header";
import About from "./parts/About";
import Projects from "./parts/Projects";
import Footer from "./parts/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
