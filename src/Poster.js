import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './Poster.css'

function Poster({heading, para, op1, op2, op3, title, buttonText}) {
    return (
        <div className="poster">
            <h2>{heading}</h2>
            <p className="poster_para">{para}</p>
            <h5 className="option_title">{title}</h5>
            <div className="para_opt">
                <CheckCircleIcon className="circle_icon" />
                {op1}
            </div>
            <div className="para_opt">
                <CheckCircleIcon className="circle_icon" />
                {op2}
            </div>
            <div className="para_opt">
                <CheckCircleIcon className="circle_icon" />
                {op3}
            </div>

            <button className="poster_button">{buttonText}</button>
        </div>
    )
}

export default Poster
