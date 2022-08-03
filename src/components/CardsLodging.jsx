import { lodgingList } from "../datas/lodgingList"
import "../styles/cardsLodging.css"
import { Link } from "react-router-dom"

export default function CardsLodging() {
    return (
        <div className="lodging">
            {lodgingList.map(lodging => {
            return (
                <Link to={`/lodging/${lodging.id}`}>
                    <div key={lodging.id} className="lodging-card" >
                        <img src={lodging.cover} className="lodging-cover" alt={lodging.cover} />
                        <p className="lodging-title">{lodging.title}</p>
                    </div>
                </Link>
            )})}                
        </div>
    )
}