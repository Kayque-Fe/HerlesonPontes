import { useState } from "react";
import "./SideSelectorStyles.scss";

export default function SideSelector(selectedSide: any) {
  const handleSideSelection = (side: string) => {
    selectedSide.setSelectedSide(side);
  };

  const [onMount, setOnMount] = useState(true);

  const mountedStyle = { animation: "animationFadeOut 750ms 1000ms forwards" };

  return (
    <>
      {onMount ? (
        <div
          className="side-selector"
          style={selectedSide.selectedSide !== "none" ? mountedStyle : undefined}
          onAnimationEnd={() => {
            setOnMount(false);
          }}
        >
          <div
            className={`gaming-side element-side ${
              selectedSide.selectedSide === "none"
                ? ""
                : selectedSide.selectedSide === "Gaming"
                ? "selected"
                : "unselected"
            }`}
            onClick={() => handleSideSelection("Gaming")}
          >
            Gaming
          </div>

          <div
            className={`professional-side element-side ${
              selectedSide.selectedSide === "none"
                ? ""
                : selectedSide.selectedSide === "Professional"
                ? "selected"
                : "unselected"
            }`}
            onClick={() => handleSideSelection("Professional")}
          >
            Professional
          </div>
        </div>
      ) : null}
    </>
  );
}
