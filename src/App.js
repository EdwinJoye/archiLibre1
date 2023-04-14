import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Exterieur from "./pages/Exterieur";
import Interieur from "./pages/Interieur";
import DecoAmeublement from "./pages/DecoAmeublement";
import Plans from "./pages/Plans";
import Croquis from "./pages/Croquis";
import Contact from "../src/pages/Contact";
import ProjetExterieur from "./pages/ProjetExterieur";
import ProjetInterieur from "./pages/ProjetInterieur";

function App() {
  const [onOff, setOnOff] = useState(1);

  return (
    <Router>
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
          path="/decoameublement"
          element={
            <DecoAmeublement
              onOff={onOff}
              setOnOff={setOnOff}
            ></DecoAmeublement>
          }
        ></Route>
        <Route
          path="/plans"
          element={<Plans onOff={onOff} setOnOff={setOnOff}></Plans>}
        ></Route>
        <Route
          path="/croquis"
          element={<Croquis onOff={onOff} setOnOff={setOnOff}></Croquis>}
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
            ></ProjetExterieur>
          }
        ></Route>
        <Route
          path="/projetInterieur"
          element={
            <ProjetInterieur
              onOff={onOff}
              setOnOff={setOnOff}
            ></ProjetInterieur>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
