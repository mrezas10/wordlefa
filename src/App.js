import { Box } from "@mui/material";
import Wordle from "./components/Wordle";
import TopNavBar from "./components/TopNavBar";
import VirtualKeyboard from "./components/VirtualKeyboard";
import InfoPopUp from "./components/InfoPopUp";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TopNavBar />
      <Wordle />
      <VirtualKeyboard />
    </Box>
  );
}

export default App;
