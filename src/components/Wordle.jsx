import { acceptedWords, possibleAnswers } from "../words";
import { Box } from "@mui/material";
import LetterFill from "./LetterFill";
import "../App.css";
import { useEffect, useState } from "react";
import { updateWord, acceptWord, successful } from "../redux/reducer";
import { useSelector, useDispatch } from "react-redux";

function Wordle() {
  const todaysWord = possibleAnswers[0];
  const dispatch = useDispatch();
  const index = useSelector((state) =>
    state.words.findIndex((item) => item.accepted === false)
  );
  const words = useSelector((state) => state.words);
  const [dummy, setDummy] = useState(false);
  const checkWord = () => {
    if (acceptedWords.findIndex((item) => item === words[index].word) > -1) {
      if (words[index].word === todaysWord) dispatch(successful());
      else dispatch(acceptWord({ index: index }));
    } else {
      setDummy(!dummy);
    }
  };
  const wordHandler = (e) => {
    console.log("ok");
    if (index !== -1) {
      switch (e.key) {
        case "آ":
        case "ژ":
        case "ء":
        case "ض":
        case "ص":
        case "ث":
        case "ق":
        case "ف":
        case "غ":
        case "ع":
        case "ه":
        case "خ":
        case "ح":
        case "ج":
        case "چ":
        case "ش":
        case "س":
        case "ی":
        case "ب":
        case "ل":
        case "ا":
        case "ت":
        case "ن":
        case "م":
        case "ک":
        case "گ":
        case "پ":
        case "ظ":
        case "ط":
        case "ز":
        case "ر":
        case "ذ":
        case "د":
        case "ئ":
        case "و":
          if (words[index].word.length < 5) {
            dispatch(
              updateWord({
                index: index,
                newWord: words[index].word + e.key,
              })
            );
            setDummy(!dummy);
          } else setDummy(!dummy);
          break;
        case "Enter":
          if (words[index].word.length === 5) {
            checkWord();
            setDummy(!dummy);
          } else setDummy(!dummy);
          break;
        case "Backspace":
          if (words[index].word.length > 0) {
            dispatch(
              updateWord({
                index: index,
                newWord: words[index].word.slice(
                  0,
                  words[index].word.length - 1
                ),
              })
            );
            setDummy(!dummy);
          } else setDummy(!dummy);
          break;
        default:
          setDummy(!dummy);
          break;
      }
    } else setDummy(!dummy);
    window.removeEventListener("keydown", wordHandler);
  };
  useEffect(() => {
    window.addEventListener("keydown", wordHandler);
  }, [dummy]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {words.map((word, wordIndex) => (
        <Box
          key={wordIndex}
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {[0, 0, 0, 0, 0].map((letter, letterIndex) => (
            <LetterFill
              key={letterIndex}
              todaysWord={todaysWord}
              wordIndex={wordIndex}
              letterIndex={letterIndex}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Wordle;
