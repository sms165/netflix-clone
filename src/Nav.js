import React, {useEffect, useState} from 'react'
import nav_avatar from './img/nav_avatar.png';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    // hide and show background for nav bar
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY >100) {
                handleShow(true)
            }else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
        
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" 
            alt="Netflix Logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
            
            <img className="nav_avatar"
            src={nav_avatar} alt="Netflix Logo" />
        </div>
    )
}

export default Nav
