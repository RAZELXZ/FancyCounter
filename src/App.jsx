import Count from "./Components/Count";
import CountButtons from "./Components/CountButtons";
import ResetButton from "./Components/ResetButton";
import Title from "./Components/Title";

function App() {
  return (
    <main>
      <div>
        <Title />
        <Count number={5} />
        <ResetButton />
        <CountButtons />
      </div>
    </main>
  );
}

export default App;
