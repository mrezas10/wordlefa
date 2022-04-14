import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LetterFill = ({ todaysWord, wordIndex, letterIndex }) => {
  const [color, setColor] = useState("white");
  const word = useSelector((state) => state.words[wordIndex].word);
  const accepted = useSelector((state) => state.words[wordIndex].accepted);
  useEffect(() => {
    if (accepted === true) {
      let indexesTW = [];
      for (let i = 0; i < 5; i++) {
        let index = todaysWord.indexOf(
          word[letterIndex],
          i - 1 > -1 ? indexesTW[i - 1] + 1 : 0
        );
        if (index > -1) indexesTW.push(index);
        else break;
      }
      let indexesAW = [];
      for (let i = 0; i < 5; i++) {
        let index = word.indexOf(
          word[letterIndex],
          i - 1 > -1 ? indexesAW[i - 1] + 1 : 0
        );
        if (index > -1) indexesAW.push(index);
        else break;
      }
      if (indexesTW.length > 0) {
        if (indexesTW.findIndex((item) => item === letterIndex) === -1) {
          if (
            indexesAW.filter(
              (item) => item < letterIndex || todaysWord[item] === word[item]
            ).length >= indexesTW.length ||
            indexesAW.filter((item) => word[item] === todaysWord[item])
              .length === indexesTW.length
          ) {
            setColor("white");
          } else {
            setColor("yellow");
          }
        } else {
          setColor("green");
        }
      } else {
        setColor("white");
      }
    }
  }, [accepted]);
  return (
    <Box
      sx={{
        margin: "1rem",
        width: "2rem",
        height: "2rem",
        bgcolor: color,
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {word[letterIndex]}
    </Box>
  );
};

export default LetterFill;
