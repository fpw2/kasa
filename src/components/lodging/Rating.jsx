import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({rating}) {
    const totalRating = Number(rating)
    const range = [1,2,3,4,5]
    const starRating = range.map(rangeElt => {return totalRating >= rangeElt ?  <FontAwesomeIcon key={`star${rangeElt}`} icon={faStar} style={{ color: "var(--primary)" }}/> : <FontAwesomeIcon key={`greystar${rangeElt}`} icon={faStar} style={{ color: "grey" }}/>})

    return (starRating)
}