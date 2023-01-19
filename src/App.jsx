import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";
import Cookies from "./components/universal/Cookies";
import AMENIDADES from "./pages/AMENIDADES";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color="255, 102, 178"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <Cookies />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amenidades" element={<AMENIDADES />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
