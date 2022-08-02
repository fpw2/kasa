import { lodgingList } from "../datas/lodgingList"
import "../styles/cardsLodging.css"

export default function CardsLodging() {
    return (
        <div className="lodging">
            {lodgingList.map(lodging => {
            return (
                <div key={lodging.title} className="lodging-card">
                    <img src={lodging.cover} className="lodging-cover" alt={lodging.cover} />
                    <p className="lodging-title">{lodging.title}</p>
                </div>
            )})}                
        </div>
    )
}