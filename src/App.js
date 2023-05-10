import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Exterieur from "./pages/Exterieur";
import Interieur from "./pages/Interieur";
import Contact from "../src/pages/Contact";
import ProjetInterieur from "./pages/ProjetInterieur";
import ScrollToTop from "./components/ScrollToTop";
import ProjetTallSize from "./pages/ProjetTallSize";
import ProjetSmoleSize from "./pages/ProjetSmallSize";
import ProjetExterieurMedium from "./pages/ProjetMediumSize";
import Test from "./pages/Test";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedPic, setSelectedPic] = useState(0);
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
          path="/projettallsize"
          element={
            <ProjetTallSize
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetTallSize>
          }
        ></Route>
        <Route
          path="/projetsmolesize"
          element={
            <ProjetSmoleSize
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetSmoleSize>
          }
        ></Route>
        <Route
          path="/projetexterieurmedium"
          element={
            <ProjetExterieurMedium
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetExterieurMedium>
          }
        ></Route>
        <Route
          path="/test"
          element={
            <Test
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></Test>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
