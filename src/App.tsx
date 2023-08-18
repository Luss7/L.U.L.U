import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AlgoDecision from "./components/AlgoDecision";
import Chatbot from "./components/Chatbot";
import RestCog from "./components/RestCog";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
          <Route path="/feature1" element={<AlgoDecision />} /> {/* Route pour AlgoDecision */}
          <Route path="/feature2" element={<Chatbot />} /> {/* Route pour Chatbot */}
          <Route path="/feature3" element={<RestCog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
