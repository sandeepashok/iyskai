import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Dojo from "./pages/dojo-etiquette";

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
          <Route path="dojo-etiquette" element={<Dojo />} />
          <Route path="contact" element={<></>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
