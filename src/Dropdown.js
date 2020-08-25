import React from 'react'
import './Dropdown.css'

function Dropdown(title,[{options}]) {
    return (
        <div>
        <div class="dropdown">
        <div className="menu__title">
            <span className="lang__title">{title}</span>
        </div>
        <div className="dropdown-content">
           {options.map(option => (
               <div className="dropdown_options">
                <span>{option}</span>
               </div> 
           ))}
        </div>
         </div>
        </div>
    )
}

export default Dropdown
