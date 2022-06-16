import "./App.css";
import BottomNavBar from "./components/BottomNavBar";
import TopAppBar from "./components/TopAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <BottomNavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
