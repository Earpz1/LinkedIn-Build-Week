import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HomeRight from "./Components/HomeRight";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeRight" element={<HomeRight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
