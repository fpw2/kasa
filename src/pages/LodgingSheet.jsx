import "../styles/banner.css"
import "../styles/lodgingSheet.css"
import { useParams } from "react-router-dom"
import { lodgingList } from "../datas/lodgingList"
import { useEffect, useState } from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../components/Footer"

export default function LodgingSheet() {
    let {id} = useParams() // Get the id param from the URL {id: "lodgingList.id"} from LodgingCards
    console.log(id)
    const [lodging, setLodging] = useState({})

    useEffect(() => {
        let lodgingId = lodgingList.find(lodging => lodging.id === id);
        setLodging(lodgingId)
    }, [lodgingList]) // lodgingList 
    
    // RATING
    const totalRating = Number(lodging.rating)
    const range = [1,2,3,4,5]
    const star = <FontAwesomeIcon icon={faStar} style={{ color: "var(--primary)" }}/>
    const greyStar = <FontAwesomeIcon icon={faStar} style={{ color: "grey" }}/>
    const rating = range.map(rangeElt => { return totalRating >= rangeElt ? star : greyStar})

    // console.log(lodging.host.children)
        
        
    

    return (
    <div>
        <div className="banner-accommodation">
            <img src={lodging.cover} alt="cover" />
        </div>
        <div className="header-lodging">
            <div className="header-title">
                <h2 className="primary">{lodging.title}</h2>
                <h4 className="primary">{lodging.lodging}</h4>
                <div>
                    <span className="tag primary-white"></span>
                </div>
            </div>
            <div>
                <div className="header-profil">
                    <h4>
                      
                    </h4>
                    <img  alt="profile"/>
                </div>
                <div className="header-rating">
                    <p className="rating">{rating}</p>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="content-describe">
                <div className="content-block">
                    <h4 className="content-title">Description</h4>
                    <button>down</button>
                </div>
                <h4 className="content-text">{lodging.description}</h4>
            </div> 
            <div className="content-equipment">
                <div className="content-block">
                    <h4 className="content-title">Equipements</h4>
                    <button>down</button>
                </div>
                <h4 className="content-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus tenetur est, quis cupiditate ex earum velit ea ab recusandae nihil? Vel itaque adipisci eos natus tenetur dolorum nulla dignissimos similique.</h4>      
            </div> 
        </div> 
        <Footer />
    </div>
    )
}