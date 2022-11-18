import "../styles/home.css";
import Banner from "../components/utils/Banner";
import LodgingCards from "../components/lodging/LodgingCards";

export default function Home() {
  return (
    <div>
      <Banner background="home" />
      <LodgingCards />
    </div>
  );
}
