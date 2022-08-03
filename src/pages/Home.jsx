import "../styles/home.css"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import CardsLodging from "../components/CardsLodging"

export default function Home() {
    return (
    <div>
        <Banner type="home" />
        <CardsLodging />
        <Footer />
    </div>
    )
} 