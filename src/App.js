import { acceptedWords, possibleAnswers } from "./words";
import { Box } from "@mui/material";
import LetterFill from "./components/LetterFill";
import "./App.css";
import { useEffect, useState } from "react";
import { updateWord, acceptWord } from "./redux/reducer";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todaysWord = possibleAnswers[0];
  const dispatch = useDispatch();
  const index = useSelector((state) =>
    state.words.findIndex((item) => item.accepted === false)
  );
  const words = useSelector((state) => state.words);
  const [dummy, setDummy] = useState(false);
  const checkWord = () => {
    if (acceptedWords.findIndex((item) => item === words[index].word) > -1) {
      dispatch(acceptWord({ index: index }));
    } else {
      setDummy(!dummy);
    }
  };
  const wordHandler = (e) => {
    console.log("ok");
    switch (e.key) {
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
        words[index].word.length < 5
          ? dispatch(
              updateWord({
                index: index,
                newWord: words[index].word + e.key,
              })
            )
          : setDummy(!dummy);
        break;
      case "Enter":
        words[index].word.length === 5 ? checkWord() : setDummy(!dummy);
        break;
      case "Backspace":
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
        break;
      default:
        setDummy(!dummy);
        break;
    }
    window.removeEventListener("keydown", wordHandler);
  };
  useEffect(() => {
    window.addEventListener("keydown", wordHandler);
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LetterFill todaysWord={todaysWord} wordIndex={0} letterIndex={0} />
        <LetterFill todaysWord={todaysWord} wordIndex={0} letterIndex={1} />
        <LetterFill todaysWord={todaysWord} wordIndex={0} letterIndex={2} />
        <LetterFill todaysWord={todaysWord} wordIndex={0} letterIndex={3} />
        <LetterFill todaysWord={todaysWord} wordIndex={0} letterIndex={4} />
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LetterFill todaysWord={todaysWord} wordIndex={1} letterIndex={0} />
        <LetterFill todaysWord={todaysWord} wordIndex={1} letterIndex={1} />
        <LetterFill todaysWord={todaysWord} wordIndex={1} letterIndex={2} />
        <LetterFill todaysWord={todaysWord} wordIndex={1} letterIndex={3} />
        <LetterFill todaysWord={todaysWord} wordIndex={1} letterIndex={4} />
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LetterFill todaysWord={todaysWord} wordIndex={2} letterIndex={0} />
        <LetterFill todaysWord={todaysWord} wordIndex={2} letterIndex={1} />
        <LetterFill todaysWord={todaysWord} wordIndex={2} letterIndex={2} />
        <LetterFill todaysWord={todaysWord} wordIndex={2} letterIndex={3} />
        <LetterFill todaysWord={todaysWord} wordIndex={2} letterIndex={4} />
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LetterFill todaysWord={todaysWord} wordIndex={3} letterIndex={0} />
        <LetterFill todaysWord={todaysWord} wordIndex={3} letterIndex={1} />
        <LetterFill todaysWord={todaysWord} wordIndex={3} letterIndex={2} />
        <LetterFill todaysWord={todaysWord} wordIndex={3} letterIndex={3} />
        <LetterFill todaysWord={todaysWord} wordIndex={3} letterIndex={4} />
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LetterFill todaysWord={todaysWord} wordIndex={4} letterIndex={0} />
        <LetterFill todaysWord={todaysWord} wordIndex={4} letterIndex={1} />
        <LetterFill todaysWord={todaysWord} wordIndex={4} letterIndex={2} />
        <LetterFill todaysWord={todaysWord} wordIndex={4} letterIndex={3} />
        <LetterFill todaysWord={todaysWord} wordIndex={4} letterIndex={4} />
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LetterFill todaysWord={todaysWord} wordIndex={5} letterIndex={0} />
        <LetterFill todaysWord={todaysWord} wordIndex={5} letterIndex={1} />
        <LetterFill todaysWord={todaysWord} wordIndex={5} letterIndex={2} />
        <LetterFill todaysWord={todaysWord} wordIndex={5} letterIndex={3} />
        <LetterFill todaysWord={todaysWord} wordIndex={5} letterIndex={4} />
      </Box>
    </Box>
  );
}

export default App;
