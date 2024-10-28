import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SideSelector from "./components/SideSelector/SideSelector";
import Professional from "./projects/professional/app/Professional";

function App() {
  const [selectedSide, setSelectedSide] = useState("none");
  console.log(selectedSide);

  const handleRender = () => (
    <div className="app">
      <SideSelector
        selectedSide={selectedSide}
        setSelectedSide={setSelectedSide}
      />

      {selectedSide == "Professional" && <Professional />}
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
