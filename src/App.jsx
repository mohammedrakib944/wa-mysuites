import "./App.css";
import Preloader from "./components/universal/Preloader";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Preloader />
      <Home />
    </div>
  );
}

export default App;
