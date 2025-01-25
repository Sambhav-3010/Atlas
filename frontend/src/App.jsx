import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comps/Navbar"; // ✅ Corrected path
import Home from "./Home";
import About from "./About";
import "./App.css";
import ShapeBlur from './comps/ShapeBlur'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ShapeBlur className="shape-blur-logo" />
    </Router>
  );
}

export default App;
