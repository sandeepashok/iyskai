import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { createContext, useEffect, useState } from "react";
import { fetchData } from "./fetch";
import Trainers from "./pages/trainers";
import Dojo from "./pages/dojo-etiquette";
import Trainer from "./pages/trainer";
import Camp from "./pages/camp";
import PhotoGallery from "./pages/photo-gallery";
import Contact from "./pages/contact";
import Tournament from "./pages/tournament";
import VideoGallery from "./pages/video-gallery";
export const TrainersContext = createContext([]);

function App() {
  const [data, setData] = useState();
  const loadData = async () => {
    const response = await fetchData();
    setData(response);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="App">
        <TrainersContext.Provider value={data}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/camp" element={<Camp setData={setData} />} />
              <Route
                path="/tournament"
                element={<Tournament setData={setData} />}
              />
              <Route path="/trainers/:id" element={<Trainer />} />
              <Route
                path="/trainers"
                index
                element={<Trainers setData={setData} />}
              />
              <Route
                path="photo-gallery"
                element={<PhotoGallery setData={setData} />}
              />
              <Route
                path="video-gallery"
                element={<VideoGallery />}
              />
              <Route path="dojo-etiquette" element={<Dojo />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Router>
        </TrainersContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
