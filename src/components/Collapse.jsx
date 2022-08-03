import "../styles/collapse.css"
import { useEffect, useState } from "react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Collapse({title, describe, isOpen = false}) {
    const[open, setOpen] = useState({isOpen})
    useEffect(() => { setOpen(isOpen)}, [isOpen])

    function changeState() {
        setOpen(!open)
    }

    return (
    <div className={`collapse ${open ? "" : "none"}`}>
        <div className="block" onClick={changeState}>
            <h3 className="title">{title}</h3>
            <FontAwesomeIcon icon={faChevronDown} />
        </div> 
        <h3 className="describe transition">{describe}</h3>
    </div>
    )

}