import "../styles/banner.css"
import "../styles/lodgingSheet.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { lodgingList } from "../datas/lodgingList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Tags from "../components/lodging/Tags"
import Gallery from "../components/lodging/Gallery"
import Name from "../components/lodging/Name"
import Rating from "../components/lodging/Rating"

export default function LodgingSheet() {
    const [isDescribe,setDescribe] = useState(false)
    const [isEquipment,setEquipment] = useState(false)

    let {id} = useParams() // Get the id param from the URL {id: "lodgingList.id"} from LodgingCards
    const lodging = lodgingList.find(lodging => lodging.id === id) // je recupere les donnees de l'id en question

    return (
    <div>
        <div className="banner-accommodation">
            {/* composant Gallery */}
            <Gallery images={lodging.pictures} cover={lodging.cover} /> 
        </div>
        <div className="header-lodging">
            <div className="header-title">
                <h2 className="primary">{lodging.title}</h2>
                <h4 className="header-location primary">{lodging.location}</h4>
                <div className="header-tags">
                    {/* composant Tags */}
                    <Tags tags={lodging.tags} /> 
                </div>
            </div>
            <div className="header-profil-rating">
                <div className="header-profil">
                    <h4>
                        {/* composant Name */}
                        <Name name={lodging.host.name} />
                    </h4>
                    <img src={lodging.host.picture} alt="profile"/>
                </div>
                <div className="header-rating">
                    <div className="rating">
                        {/* composant Rating */}
                        <Rating rating={lodging.rating}/> 
                    </div>
                </div>
            </div>
        </div>

        <div className="content">
            {/* can be remplaced by collapse component */}
            <div className={`content-describe ${isDescribe ? "arrow-down" : ""}`}>
                <div className="content-block" onClick={()=>{ setDescribe(!isDescribe)}}>
                    <h4 className="content-title">Description</h4>
                    <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />
                </div>
                {isDescribe && <h4 key={lodging.description} className="content-text">{lodging.description}</h4>}   
            </div> 
            <div className={`content-equipment ${isEquipment ? "arrow-down" : ""}`}>
                <div className="content-block" onClick={()=>{ setEquipment(!isEquipment)}}>
                    <h4 className="content-title">Equipements</h4>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {isEquipment && <h4  className="content-text">{lodging.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}</h4>}   
            </div> 
        </div> 
    </div>
    )
}