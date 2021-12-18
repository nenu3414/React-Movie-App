// libraries, pages, components
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movie/:id" element={<HomePage />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
