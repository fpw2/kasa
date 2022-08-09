import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function Gallery({images, cover}) {
    let index = 0
    let pictures = images.map(img => img)

    function handleNextImgClick(){
        if(index < pictures.length - 1){
            index++
        }else{
            index = 0
        }
        let picture = document.querySelector(".cover-picture");
        picture.src = pictures[index];
    }

    function handlePrevImgClick(){
        if(index > 0){
            index--
        }else{
            index = pictures.length - 1
        }
        let picture = document.querySelector(".cover-picture");
        picture.src = pictures[index];
    }

    return (<>
        <div onClick={handlePrevImgClick} className="arrow-left">
            <FontAwesomeIcon icon={faChevronLeft} size="4x" />
        </div>
        <img className="cover-picture" src={cover} alt="cover" />
        <div onClick={handleNextImgClick} className="arrow-right">
            <FontAwesomeIcon icon={faChevronRight} size="4x" />
        </div>
    </>)

}