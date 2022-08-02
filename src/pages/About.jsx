import "../styles/about.css"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import { useState } from "react"
import {aboutList} from "../datas/aboutList.js"
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    const [setting, setSetting] = useState({textVisible: true})
    const className = setting.textVisible ? "block" : "none"
    console.log(className)
    
    function handleToggleClick() {
        setSetting({
            ...setting,
            textVisible: !setSetting.textVisible
        })
    }

    return (
        <div className="bg">
            <Banner />
            <div className="about">
                {aboutList.map(about => {
                    return (<>
                        <div className="about-block">
                            <h3 className="about-title">{about.title}</h3>
                            <i class="fa-solid fa-chevron-up"></i>
                            <button onClick={handleToggleClick}>down</button>
                        </div> 
                        <h3 className={className}>{about.describe}</h3>
                    </>)
                })}
             </div>
            <Footer />
        </div>
    )
}