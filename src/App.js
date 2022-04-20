import "../src/components/style.scss";
import Gender from "./components/Gender";
import Age from "./components/Age";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const getGender = (data) => {
    console.log("gender is", data);
    return data;
  };

  const gender = getGender;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Gender func={getGender} />} />
        <Route exact path="/age" element={<Age gender={gender} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
