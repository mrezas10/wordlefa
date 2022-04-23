import { Box, AppBar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoPopUp from "./InfoPopUp";
import { useState } from "react";

const TopNavBar = () => {
  const [openHelp, setOpenHelp] = useState(false);
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
        <HelpOutlineIcon
          onClick={() => setOpenHelp(true) && console.log(openHelp)}
          fontSize="inherit"
        />
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
      </Box>
      <InfoPopUp open={openHelp} setOpen={setOpenHelp} />
    </AppBar>
  );
};

export default TopNavBar;
