import "../src/components/style.scss";
import Gender from "./components/Gender";
import Age from "./components/Age";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Gender />} />
        <Route exact path="/age" element={<Age />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
