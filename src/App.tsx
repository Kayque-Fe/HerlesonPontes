import { useState } from "react";
import "./App.scss";
import SideSelector from "./components/SideSelector/SideSelector";
import IndexProfessional from "./projects/Professional";

function App() {
  const [selectedSide, setSelectedSide] = useState("none");
  console.log(selectedSide);

  return (
    <div className="app">
      <SideSelector
        selectedSide={selectedSide}
        setSelectedSide={setSelectedSide}
      />

      {selectedSide == "Professional" && <IndexProfessional />}
    </div>
  );
}

export default App;
