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

  const campData = { title: "Camp", image: "http://jkaconn.com/fcamp04d.jpg" }
  const tournamentData = { title: "Tournament", image: "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg" }

  return (
    <div className="App">
      <TrainersContext.Provider value={data}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/camp" element={<Camp info={campData} />} />
            <Route path="/tournament" element={<Camp info={tournamentData} />} />
            {/* <Route path="/trainers" element={<Trainers setData={setData} />}>
              <Route path=":id" element={<Trainer />} />
              <Route index element={<Trainers setData={setData} />} />
            </Route> */}
            <Route path="/trainers/:id" element={<Trainer />} />
            <Route
              path="/trainers"
              index
              element={<Trainers setData={setData} />}
            />
            <Route path="photo-gallery" element={<PhotoGallery />} />
            {/* <Route path="video-gallery" element={<></>} /> */}
            <Route path="dojo-etiquette" element={<Dojo />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>

        <Footer />
      </TrainersContext.Provider>
    </div>
  );
}

export default App;
