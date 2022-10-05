import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import TrailerVideo from "./components/TrailerVideo";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/xemphim" element={<Home />} />
          <Route path="/xemphim/info" element={<Info />} />
          <Route path="/xemphim/search" element={<Search />} />
          <Route path="/xemphim/xem-trailer/:id" element={<TrailerVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
