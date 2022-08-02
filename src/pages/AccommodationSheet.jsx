import "../styles/banner.css"
import { lodgingList } from "../datas/lodgingList"

export default function AccommodationSheet() {

    return (<>
       
        <img src={lodgingList.cover} className="banner-accomation" alt={lodgingList.title}></img>
        
    </>)
}