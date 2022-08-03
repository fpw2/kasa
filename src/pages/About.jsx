import "../styles/about.css"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import {aboutList} from "../datas/aboutList.js"
import Collapse from "../components/Collapse"

export default function About() {

    return (<>
        <Banner type="about" />
        <div className="about">
            {aboutList.map(about => { return <Collapse title={about.title}  describe={about.describe} />})}
        </div>
        <Footer />
    </>)
}