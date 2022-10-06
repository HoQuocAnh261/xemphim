import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import TrailerVideo from "./components/TrailerVideo";
import Info from "./pages/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:id" element={<Info />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watch-movie/:id" element={<TrailerVideo />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
