import Logo from "../images/pulse-logo.svg";
import Menu from "../images/icon-menu.svg";
import { useState } from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const ToggleNav = () => setOpenMenu(!openMenu);

    return (
        <header>
            <a href="https://pulseapp.com/" className="logo--link"><img src={Logo} alt="Pulse's logo"/></a>
            <button aria-label="toggle-navigation" className="header--mobile--menu--toggle" onClick={ToggleNav}>
                <img src={Menu} alt=""/>
            </button>
            <nav className="header--nav">
                <ul className={`header--nav--ul ${!openMenu ? "" : "show"}`}>
                    <li><a href="https://pulseapp.com/features" className="header--nav--ul--link link--one">Features</a></li>
                    <li><a href="https://pulseapp.com/customer-stories" className="header--nav--ul--link link--two">Customer Stories</a></li>
                    <li><a href="https://pulseapp.com/pricing" className="header--nav--ul--link link--three">Pricing</a></li>
                    <li><a href="https://pulseapp.com/blog" className="header--nav--ul--link link--four">Blog</a></li>
                    <li className="invisible--li"><a href="https://pulseapp.com/contact" className="header--nav--ul--link link--five header--nav--ul--invisible">Contact</a></li>
                    <li className="invisible--li"><a href="https://help.pulseapp.com" className="header--nav--ul--link link--six header--nav--ul--invisible">Support</a></li>
                    <li className="header--nav--ul--li--sign-up"><a href="https://signup.pulseapp.com/plus" className="header--nav--ul--sign-up">Sign Up</a></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;