import {
  AppBar,
  Box,
  IconButton,
  Input,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

const TopAppBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {isSearching ? (
          <Toolbar>
            <IconButton
              onClick={() => {
                setIsSearching(false);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Input
              autoFocus
              placeholder="Search a game"
              sx={{ input: { color: "white" } }}
              startAdornment={<SearchIcon sx={{ mr: 1, color: "white" }} />}
              disableUnderline
            />
          </Toolbar>
        ) : (
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gaming Calendar
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setIsSearching(true);
              }}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
};

export default TopAppBar;
