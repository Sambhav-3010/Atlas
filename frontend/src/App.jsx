import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Spline from "./components/Spline";
import About from "./components/About";
import Output from "./components/Output";

function App() {
  return (
    <div className="flex items-center flex-col h-screen w-full mx-auto p-3 text-center ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
