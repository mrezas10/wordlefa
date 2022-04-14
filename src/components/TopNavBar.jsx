import { Box, AppBar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const TopNavBar = () => {
  return (
    <AppBar
      sx={{
        width: "100vw",
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#121213 !important",
        borderBottom: "1px solid #3a3a3c",
      }}
      position="static"
    >
      <Box
        sx={{
          margin: "0 1rem",
          height: "2rem",
          fontSize: "2rem",
        }}
      >
        <MenuIcon fontSize="inherit" />
        <HelpOutlineIcon fontSize="inherit" />
      </Box>
      <Typography sx={{}} fontFamily={"Shabnam"} fontSize={"2rem"}>
        واژگانه
      </Typography>
      <Box
        sx={{
          margin: "0 1rem",
          height: "2rem",
          fontSize: "2rem",
        }}
      >
        <BarChartIcon fontSize="inherit" />
        <SettingsIcon fontSize="inherit" />
      </Box>
    </AppBar>
  );
};

export default TopNavBar;
