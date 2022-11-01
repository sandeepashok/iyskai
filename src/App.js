import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/camp" element={<></>} />
          <Route path="/tournament" element={<></>} />
          <Route path="photo-gallery" element={<></>} />
          <Route path="video-gallery" element={<></>} />
          <Route path="dojo-atiquette" element={<></>} />
          <Route path="contact" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
