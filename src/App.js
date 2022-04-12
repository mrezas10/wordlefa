import { acceptedWords, possibleAnswers } from "./words";
function App() {
  return (
    <div>
      {acceptedWords.sort().map((word) => (
        <div>"{word}",</div>
      ))}
    </div>
  );
}

export default App;
