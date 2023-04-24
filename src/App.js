import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Exterieur from "./pages/Exterieur";
import Interieur from "./pages/Interieur";
import Contact from "../src/pages/Contact";
import ProjetExterieur from "./pages/ProjetExterieur";
import ProjetInterieur from "./pages/ProjetInterieur";
import ScrollToTop from "./components/ScrollToTop";
import ProjetClamart from "./pages/ProjetClamart";
import Test from "./pages/Test";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [onOff, setOnOff] = useState(1);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home onOff={onOff} setOnOff={setOnOff}></Home>}
        ></Route>
        <Route
          path="/aboutme"
          element={<AboutMe onOff={onOff} setOnOff={setOnOff}></AboutMe>}
        ></Route>
        <Route
          path="/exterieur"
          element={<Exterieur onOff={onOff} setOnOff={setOnOff}></Exterieur>}
        ></Route>
        <Route
          path="/interieur"
          element={<Interieur onOff={onOff} setOnOff={setOnOff}></Interieur>}
        ></Route>
        <Route
          path="/contact"
          element={<Contact onOff={onOff} setOnOff={setOnOff}></Contact>}
        ></Route>
        <Route
          path="/projetExterieur"
          element={
            <ProjetExterieur
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            ></ProjetExterieur>
          }
        ></Route>
        <Route
          path="/projetInterieur"
          element={
            <ProjetInterieur
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            ></ProjetInterieur>
          }
        ></Route>
        <Route
          path="/projetclamart"
          element={
            <ProjetClamart
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            ></ProjetClamart>
          }
        ></Route>
        <Route path="/test" element={<Test></Test>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
