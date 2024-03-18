import "./Navbar.scss";
//import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from '../../assets/Logo.png';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
const [showNav, SetShowNav] = useState(false);

/*const handleLinkClick = () => {
    setShowNav(false); // Close the navbar after clicking on a link
  };*/

  return (
    <header className = "navbar">
        <nav className="navbar__container wrapper">
            <a href="" className="navbar__logo" onClick={() => SetShowNav(false)}>
                <img src={Logo} alt="logo"/>
            </a>

            <ul className={`${showNav ? "show" : ""}`}>
            <li onClick={() => SetShowNav(false)}><a href="#">Home</a></li>
                <li onClick={() => SetShowNav(false)}><a href="#">About</a></li>
                <li onClick={() => SetShowNav(false)}><a href="#">Tokenomics</a></li>
                <li onClick={() => SetShowNav(false)}><a href="#">RoadMap</a></li>
                <li onClick={() => SetShowNav(false)}><a href="#">Contact</a></li>
            </ul>

            <div className="navbar__menu" onClick={() => SetShowNav(!showNav)}>
                {showNav ? <IoMdClose/> : <IoMdMenu/>}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
