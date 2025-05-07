// src/App.js
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photos";
import LoveNotes from "./pages/LoveNotes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/love-notes" element={<LoveNotes />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
