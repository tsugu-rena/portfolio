import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saven from "./pages/works/Saven";
import Koujien from "./pages/works/Koujien";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/save-n" element={<Saven />} />
        <Route path="/portfolio/koujien" element={<Koujien />} />
      </Routes>
    </Router>
  );
};

export default App;
