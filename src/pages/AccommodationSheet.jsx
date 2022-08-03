import "../styles/banner.css"
import "../styles/accommodationSheet.css"
import { useParams } from "react-router-dom"
import { lodgingList } from "../datas/lodgingList"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"

export default function AccommodationSheet() {
    let {id} = useParams()
    const [location, setLocation] = useState({})

    useEffect(() => {
        let lodging = lodgingList.find(item => item.id === id);
        setLocation(lodging)
    }, [id])   


    return (<>
        <div className="banner-accommodation">
            <img src={location.cover} alt={location.cover} />
        </div>
        <div className="header-lodging">
            <div className="header-title">
                <h2 className="primary">{location.title}</h2>
                <h4 className="primary">{location.location}</h4>
                <span className="tag primary-white"></span>
            </div>
            <div>
                <div className="header-profil">
                    <h4>p</h4>
                    <img className="rounded" alt="profile"/>
                </div>
                <div className="header-rating">Rating</div>
            </div>
        </div>

        <div className="content">
            <div className="content-describe">
                <div className="content-block">
                    <h4 className="content-title">Description</h4>
                    <button>down</button>
                </div>
                <h4 className="content-text">{location.description}</h4>
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
    </>)
}