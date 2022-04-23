import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LetterFill = ({ todaysWord, wordIndex, letterIndex }) => {
  const [color, setColor] = useState("#121213");
  const word = useSelector((state) => state.words[wordIndex].word);
  const accepted = useSelector((state) => state.words[wordIndex].accepted);
  useEffect(() => {
    if (accepted && word[letterIndex]) {
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
            setColor("#3a3a3c");
          } else {
            setColor("#b59f3b");
          }
        } else {
          setColor("#538d4e");
        }
      } else {
        setColor("#3a3a3c");
      }
    } else {
      setColor("#121213");
    }
  }, [accepted, todaysWord, word, letterIndex]);
  return (
    <Box
      sx={{
        margin: ".15rem",
        width: "3.62rem",
        height: "3.62rem",
        bgcolor: color,
        border:
          accepted && word[letterIndex]
            ? "2px solid " + color
            : word[letterIndex]
            ? "2px solid #565758"
            : "2px solid #3a3a3c",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2rem",
        transition: accepted && `all .1s`,
        transitionDelay: accepted && `${letterIndex * 0.3 + 0.35}s`,
        animationName: accepted
          ? "accepted-letter"
          : word[letterIndex] && "letter-in",
        animationDuration:
          accepted && word[letterIndex] ? ".7s" : word[letterIndex] && ".1s",
        animationDelay: accepted && `${letterIndex * 0.3}s`,
      }}
    >
      {word[letterIndex]}
    </Box>
  );
};

export default LetterFill;
