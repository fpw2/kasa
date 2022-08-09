import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({rating}) {
    const totalRating = Number(rating)
    const range = [1,2,3,4,5]
    const star = <FontAwesomeIcon icon={faStar} style={{ color: "var(--primary)" }}/>
    const greyStar = <FontAwesomeIcon icon={faStar} style={{ color: "grey" }}/>
    const starRating = range.map(rangeElt => {return totalRating >= rangeElt ?  star : greyStar})

    return (starRating)
}