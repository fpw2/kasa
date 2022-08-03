import "../styles/home.css"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import LodgingCards from "../components/LodgingCards"

export default function Home() {
    return (
    <div>
        <Banner background="home" />
        <LodgingCards />
        <Footer />
    </div>
    )
} 