import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Spline from "./components/Spline";
import About from "./components/About";

function App() {
  return (
    <div className=" flex items-center flex-col h-screen w-full mx-auto p-3 text-center bg-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
