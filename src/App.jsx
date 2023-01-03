import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color="255, 102, 178"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Home />
    </div>
  );
}

export default App;
