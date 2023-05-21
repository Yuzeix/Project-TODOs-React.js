import {  IoIosCloseCircle } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import React from 'react'
import './TodoIcon.css'

const iconTypes = {
    "check": (color) => <IoIosCheckmarkCircle className="Icon-svg" fill={color} />,
    "delete": (color) => <IoIosCloseCircle className="Icon-svg" fill={color} />
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type] (color)}
        </span>
    )
}

export { TodoIcon };