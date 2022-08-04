import "../styles/banner.css"
import "../styles/lodgingSheet.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { lodgingList } from "../datas/lodgingList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function LodgingSheet() {
    const [isDescription,setDescription] = useState(false)
    const [isEquipment,setEquipment] = useState(false)


    let {id} = useParams() // Get the id param from the URL {id: "lodgingList.id"} from LodgingCards
    const lodging = lodgingList.find(lodging => lodging.id === id)

    // TAGS
    const tags = lodging.tags.map(tag => <span className="tag primary-white">{tag}</span>)

    // NAME
    const fullName = lodging.host.name.split(" ")
    const firstName = fullName[0]
    const lastName = fullName[1]
    
    // RATING
    const totalRating = Number(lodging.rating)
    const range = [1,2,3,4,5]
    const star = <FontAwesomeIcon icon={faStar} style={{ color: "var(--primary)" }}/>
    const greyStar = <FontAwesomeIcon icon={faStar} style={{ color: "grey" }}/>
    const rating = range.map(rangeElt => { return totalRating >= rangeElt ?  star : greyStar})

    // EQUIPMENT
    const equipments = lodging.equipments.map(equipment => <li>{equipment}</li>)


    return (
    <div>
        <div className="banner-accommodation">
            <img src={lodging.cover} alt="cover" />
        </div>
        <div className="header-lodging">
            <div className="header-title">
                <h2 className="primary">{lodging.title}</h2>
                <h4 className="header-location primary">{lodging.location}</h4>
                <div className="header-tags">
                    {tags}
                </div>
            </div>
            <div className="header-profil-rating">
                <div className="header-profil">
                    <h4>
                      <span>{firstName}</span>
                      <span>{lastName}</span>
                    </h4>
                    <img src={lodging.host.picture} alt="profile"/>
                </div>
                <div className="header-rating">
                    <div className="rating">{rating}</div>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="content-describe">
                <div className="content-block" onClick={()=>{ setDescription(!isDescription);}}>
                    <h4 className="content-title">Description</h4>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {
                isDescription && <h4 className="content-text">{lodging.description}</h4>   
                }   
            </div> 
            <div className="content-equipment">
                <div className="content-block" onClick={()=>{ setEquipment(!isEquipment)}}>
                    <h4 className="content-title">Equipements</h4>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {
                isEquipment && <h4 className="content-text">{equipments}</h4>   
                }   
            </div> 
        </div> 
    </div>
    )
}