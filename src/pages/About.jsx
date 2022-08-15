import "../styles/about.css";
import Banner from "../components/Banner";
import { aboutList } from "../datas/aboutList.js";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <div className="about">
      <Banner background="about" text="no-text" height="height" />
      <div className="about-content">
        {aboutList.map((about, index) => {
          return (
            <li key={index}>
              <Collapse title={about.title} describe={about.describe} />
            </li>
          );
        })}
      </div>
    </div>
  );
}
