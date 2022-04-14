import { Box } from "@mui/material";
import Wordle from "./components/Wordle";
import TopNavBar from "./components/TopNavBar";

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
    </Box>
  );
}

export default App;
