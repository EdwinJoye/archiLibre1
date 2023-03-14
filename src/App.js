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

function App() {
  const [onOff, setOnOff] = useState(0);

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
      </Routes>
    </Router>
  );
}

export default App;
