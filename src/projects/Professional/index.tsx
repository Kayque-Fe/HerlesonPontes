import BannerIF from "./components/BannerIF/Bannerif";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import MeetProfessional from "./components/MeetProfessional/MeetProfessional";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import "./index.scss";

export default function IndexProfessional() {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
      <Introduction />
      <BannerIF />
      <MeetProfessional />
      <Skill />
      <BannerIF />
    </div>
  );
}
