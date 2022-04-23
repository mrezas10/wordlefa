import { Box } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateWord, acceptWord, successful } from "../redux/reducer";
import { acceptedWords, possibleAnswers } from "../words";

const VirtualKey = ({ keyLetter }) => {
  const newWord = useSelector((state) => state.newWord);
  const index = useSelector((state) =>
    state.words.findIndex((item) => item.accepted === false)
  );
  const [color, setColor] = useState("#818384");
  const todaysWord = possibleAnswers[newWord.index];
  const [dummy, setDummy] = useState(false);
  const words = useSelector((state) => state.words);
  const dispatch = useDispatch();
  const checkWord = () => {
    if (acceptedWords.findIndex((item) => item === words[index].word) > -1) {
      if (words[index].word === todaysWord) dispatch(successful());
      else dispatch(acceptWord({ index: index }));
    } else {
      setDummy(!dummy);
    }
  };
  const wordUpdater = () => {
    if (index !== -1) {
      if (keyLetter !== "Backspace" && keyLetter !== "Enter") {
        words[index].word.length < 5
          ? dispatch(
              updateWord({
                index: index,
                newWord: words[index].word + keyLetter,
              })
            )
          : setDummy(!dummy);
      } else if (keyLetter === "Backspace") {
        words[index].word.length > 0
          ? dispatch(
              updateWord({
                index: index,
                newWord: words[index].word.slice(
                  0,
                  words[index].word.length - 1
                ),
              })
            )
          : setDummy(!dummy);
      } else {
        words[index].word.length === 5 ? checkWord() : setDummy(!dummy);
      }
    }
  };
  useEffect(() => {
    if (index > 0) {
      let indexesTW = [];
      for (let i = 0; i < 5; i++) {
        let indexTemp = todaysWord.indexOf(
          keyLetter,
          i - 1 > -1 ? indexesTW[i - 1] + 1 : 0
        );
        if (indexTemp > -1) indexesTW.push(indexTemp);
        else break;
      }
      let indexesAW = [];
      for (let i = 0; i < 5; i++) {
        let indexTemp = words[index - 1].word.indexOf(
          keyLetter,
          i - 1 > -1 ? indexesAW[i - 1] + 1 : 0
        );
        if (indexTemp > -1) indexesAW.push(indexTemp);
        else break;
      }
      if (indexesTW.length > 0 && indexesAW.length > 0) {
        if (
          indexesAW.filter(
            (item) => words[index - 1].word[item] === todaysWord[item]
          ).length > 0
        ) {
          setColor("#538d4e");
        } else {
          if (color !== "#538d4e") setColor("#b59f3b");
        }
      } else if (indexesAW.length > 0) {
        setColor("#3a3a3c");
      }
    } else if (
      words.filter((item) => item.accepted === false).length === 0 &&
      color !== "#538d4e" &&
      todaysWord.includes(keyLetter)
    )
      setColor("#538d4e");
  }, [index]);
  return (
    <Box
      onClick={wordUpdater}
      sx={{
        margin: ".2rem",
        height: "3.6rem",
        minWidth: "1.5rem",
        padding: "0 .6rem",
        borderRadius: "5px",
        bgcolor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.1rem",
        color: "#ffffff",
        cursor: "pointer",
      }}
    >
      {String(keyLetter) === "Backspace" ? (
        <BackspaceIcon fontSize="medium" />
      ) : (
        String(keyLetter)
      )}
    </Box>
  );
};

export default VirtualKey;
