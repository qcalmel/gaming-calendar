import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const BottomNavBar = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<SearchIcon />} />
        <BottomNavigationAction icon={<CalendarIcon />} />
        <BottomNavigationAction icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
