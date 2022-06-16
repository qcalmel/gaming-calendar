import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <BottomNavigationAction component={Link} to="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/calendar"
          icon={<CalendarIcon />}
        />
        <BottomNavigationAction icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
