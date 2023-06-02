import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Exterieur from "./pages/Exterieurs/Exterieur";
import Interieur from "./pages/Interieurs/Interieur";
import Contact from "../src/pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ProjetExterieurTall from "./pages/Exterieurs/ProjetExterieurTall";
import ProjetExterieurSmall from "./pages/Exterieurs/ProjetExterieurSmall";
import ProjetExterieurMedium from "./pages/Exterieurs/ProjetExterieurMedium";
import ProjetInterieurAntony from "./pages/Interieurs/ProjetInterieurAntony";
import ProjetInterieurMontfermeil from "./pages/Interieurs/ProjetInterieurMontfermeil";
import ProjetInterieurCliqueTV from "./pages/Interieurs/ProjetInterieurCliqueTV";
import ProjetInterieurMali from "./pages/Interieurs/ProjetInterieurMali";
import Test from "./pages/Test";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedPic, setSelectedPic] = useState(null);
  const [isSelectedMenu, setSelectedMenu] = useState(null);
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
          element={
            <Contact
              onOff={onOff}
              setOnOff={setOnOff}
              isSelectedMenu={isSelectedMenu}
              setSelectedMenu={setSelectedMenu}
            ></Contact>
          }
        ></Route>
        <Route
          path="/projetexterieursmall"
          element={
            <ProjetExterieurSmall
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetExterieurSmall>
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
          path="/projetexterieurtall"
          element={
            <ProjetExterieurTall
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetExterieurTall>
          }
        ></Route>
        <Route
          path="/projetinterieurantony"
          element={
            <ProjetInterieurAntony
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetInterieurAntony>
          }
        ></Route>
        <Route
          path="/projetinterieurmontfermeil"
          element={
            <ProjetInterieurMontfermeil
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetInterieurMontfermeil>
          }
        ></Route>
        <Route
          path="/projetinterieurcliquetv"
          element={
            <ProjetInterieurCliqueTV
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetInterieurCliqueTV>
          }
        ></Route>
        <Route
          path="/projetinterieurmali"
          element={
            <ProjetInterieurMali
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
            ></ProjetInterieurMali>
          }
        ></Route>
        <Route
          path="/test"
          element={<Test onOff={onOff} setOnOff={setOnOff}></Test>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
