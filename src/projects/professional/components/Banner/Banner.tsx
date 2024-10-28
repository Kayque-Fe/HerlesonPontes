import "../Header/Header.scss";
import "./Banner.scss";

export default function Banner({ image, children }: { image?: string; children: React.ReactNode }) {
  const STYLE_IMG = {
    background: `url(${image}) rgba(0, 0, 0, 0.466)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendeMode: "overlay",
  };

  return (
    <div
      className="banner"
      style={image ? STYLE_IMG : {}}
    >
      {children}
    </div>
  );
}
