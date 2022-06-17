import "./App.css";
import BottomNavBar from "./components/BottomNavBar";
import TopAppBar from "./components/TopAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import Home from "./components/Home";
import { useState } from "react";
import Search from "./components/Search";
import { Box } from "@mui/material";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <TopAppBar isSearching={isSearching} setIsSearching={setIsSearching} />
        <Box
          position="absolute"
          top={56}
          bottom={56}
          left={0}
          right={0}
          overflow="auto"
        >
          {isSearching ? (
            <Search />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          )}
        </Box>

        <BottomNavBar setIsSearching={setIsSearching} />
      </div>
    </BrowserRouter>
  );
}

export default App;
