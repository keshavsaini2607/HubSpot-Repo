import React from 'react'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__lang">
                <MicIcon className="header__mic" fontSize="large" />
                <div class="dropdown">
                    <div className="menu__title">
                        <span className="lang__title">English</span>
                    </div>
                    <div className="dropdown-content">
                        <div className="dropdown_options">
                        <span>French</span>
                        </div>
                        <div className="dropdown_options">
                        <span>German</span>
                        </div>
                        <div className="dropdown_options">
                        <span>Hindi</span>
                        </div>
                        <div className="dropdown_options">
                        <span>Japanese</span>
                        </div>
                    </div>
                </div>
            </div> 
            <span className="header__contact">Contact Sales</span>

            <SearchIcon className="header__search" />
            <button className="header__login">Login</button>
            <button className="header__btn2">Get HubSpot Free</button>
            
        </div>
    )
}

export default Header
