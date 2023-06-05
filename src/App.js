import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LocationWrapper from "./LocationWrapper";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LocationWrapper />
    </Router>
  );
}

export default App;
