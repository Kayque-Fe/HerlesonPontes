import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Professional from "./projects/professional/app/Professional";

function App() {
  // const [selectedSide, setSelectedSide] = useState("none");
  // console.log(selectedSide);

  const handleRender = () => (
    <div className="app">
      <Professional />
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          Component={handleRender}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
