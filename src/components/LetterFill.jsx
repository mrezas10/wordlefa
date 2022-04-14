import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const LetterFill = ({ todaysWord, wordIndex, letterIndex }) => {
  const letter = useSelector(
    (state) => state.words[wordIndex].word[letterIndex]
  );
  return (
    <Box
      sx={{
        margin: "1rem",
        width: "2rem",
        height: "2rem",
        bgcolor: "orange",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {letter}
    </Box>
  );
};

export default LetterFill;
