import "../styles/collapse.css";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Collapse({ title, describe }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDescribeClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`collapse ${isOpen ? "" : "none"}`}>
      <div className="block" onClick={handleDescribeClick}>
        <h3 className="title">{title}</h3>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <h3 className="describe transition">{describe}</h3>
    </div>
  );
}
