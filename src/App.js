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
    <div className="App">
      <TrainersContext.Provider value={data}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/camp" element={<></>} />
            <Route path="/tournament" element={<></>} />
            <Route path="/trainers" element={<></>} />
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
            <Route path="photo-gallery" element={<></>} />
            <Route path="video-gallery" element={<></>} />
            <Route path="dojo-etiquette" element={<Dojo />} />
            <Route path="contact" element={<></>} />
          </Routes>
        </Router>
        {/* {data && (
        <div>
          {data.trainers[0].content.split("\n").map((data) => (
            <div>{data}</div>
          ))}
        </div>
      )} */}
        <Footer />
      </TrainersContext.Provider>
    </div>
  );
}

export default App;
