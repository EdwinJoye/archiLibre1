import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Exterieur from "./pages/Exterieurs/Exterieur";
import Interieur from "./pages/Interieurs/Interieur";
import Contact from "../src/pages/Contact";
import ProjetExterieurTall from "./pages/Exterieurs/ProjetExterieurTall";
import ProjetExterieurSmall from "./pages/Exterieurs/ProjetExterieurSmall";
import ProjetExterieurMedium from "./pages/Exterieurs/ProjetExterieurMedium";
import ProjetInterieurAntony from "./pages/Interieurs/ProjetInterieurAntony";
import ProjetInterieurMontfermeil from "./pages/Interieurs/ProjetInterieurMontfermeil";
import ProjetInterieurCliqueTV from "./pages/Interieurs/ProjetInterieurCliqueTV";
import ProjetInterieurMali from "./pages/Interieurs/ProjetInterieurMali";
import Test from "./pages/Test";

function LocationWrapper() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedPic, setSelectedPic] = useState(null);
  const [selectedPage, setSelectedPage] = useState("");
  const [isSelectedMenu, setIsSelectedMenu] = useState(null);
  const location = useLocation();

  let isActive = 0;

  if (location.pathname === "/") {
    isActive = 1;
  } else if (location.pathname === "/exterieur") {
    isActive = 2;
  } else if (location.pathname === "/interieur") {
    isActive = 3;
  } else if (location.pathname === "/aboutme") {
    isActive = 4;
  } else if (location.pathname === "/contact") {
    isActive = 5;
  } else {
    isActive = 6;
  }

  return (
    <Routes>
      <Route path="/" element={<Home isActive={isActive}></Home>}></Route>
      <Route
        path="/aboutme"
        element={
          <AboutMe
            isActive={isActive}
            isSelectedMenu={isSelectedMenu}
          ></AboutMe>
        }
      ></Route>
      <Route
        path="/exterieur"
        element={
          <Exterieur
            isActive={isActive}
            isSelectedMenu={isSelectedMenu}
          ></Exterieur>
        }
      ></Route>
      <Route
        path="/interieur"
        element={
          <Interieur
            isActive={isActive}
            isSelectedMenu={isSelectedMenu}
          ></Interieur>
        }
      ></Route>
      <Route
        path="/contact"
        element={
          <Contact
            isActive={isActive}
            isSelectedMenu={isSelectedMenu}
          ></Contact>
        }
      ></Route>
      <Route
        path="/projetexterieursmall"
        element={
          <ProjetExterieurSmall
            isActive={isActive}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            isSelectedMenu={isSelectedMenu}
          ></ProjetExterieurSmall>
        }
      ></Route>
      <Route
        path="/projetexterieurmedium"
        element={
          <ProjetExterieurMedium
            isActive={isActive}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            isSelectedMenu={isSelectedMenu}
          ></ProjetExterieurMedium>
        }
      ></Route>
      <Route
        path="/projetexterieurtall"
        element={
          <ProjetExterieurTall
            isActive={isActive}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            isSelectedMenu={isSelectedMenu}
          ></ProjetExterieurTall>
        }
      ></Route>
      <Route
        path="/projetinterieurantony"
        element={
          <ProjetInterieurAntony
            isActive={isActive}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            isSelectedMenu={isSelectedMenu}
          ></ProjetInterieurAntony>
        }
      ></Route>
      <Route
        path="/projetinterieurmontfermeil"
        element={
          <ProjetInterieurMontfermeil
            isActive={isActive}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            isSelectedMenu={isSelectedMenu}
          ></ProjetInterieurMontfermeil>
        }
      ></Route>
      <Route
        path="/projetinterieurcliquetv"
        element={
          <ProjetInterieurCliqueTV
            isActive={isActive}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            isSelectedMenu={isSelectedMenu}
          ></ProjetInterieurCliqueTV>
        }
      ></Route>
      <Route
        path="/projetinterieurmali"
        element={
          <ProjetInterieurMali
            isActive={isActive}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            isSelectedMenu={isSelectedMenu}
          ></ProjetInterieurMali>
        }
      ></Route>
      <Route
        path="/test"
        element={
          <Test
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isSelectedMenu={isSelectedMenu}
            setIsSelectedMenu={setIsSelectedMenu}
          ></Test>
        }
      ></Route>
    </Routes>
  );
}

export default LocationWrapper;
