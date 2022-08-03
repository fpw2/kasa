import "../styles/lodgingCards.css"
import { lodgingList } from "../datas/lodgingList"
import { Link } from "react-router-dom"

export default function LodgingCards() {
    return (
        <div className="lodging">
            {lodgingList.map(lodging => {
            return (
                <Link to={`/lodging/${lodging.id}`}> {/* je passe dans mon url l'id */}
                    <div key={lodging.id} className="lodging-card" >
                        <img src={lodging.cover} className="lodging-cover" alt={lodging.cover} />
                        <p className="lodging-title">{lodging.title}</p>
                    </div>
                </Link>
            )})}                
        </div>
    )
}