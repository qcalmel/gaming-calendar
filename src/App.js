import "./App.css";
import BottomNavBar from "./layouts/BottomNavBar";
import TopAppBar from "./layouts/TopAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import { useState } from "react";
import Search from "./pages/Search";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => setSearchQuery(query);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <TopAppBar
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />
          <Box
            position="absolute"
            top={64}
            bottom={56}
            left={0}
            right={0}
            overflow="auto"
          >
            {isSearching ? (
              <Search searchQuery={searchQuery} />
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
    </QueryClientProvider>
  );
}

export default App;
