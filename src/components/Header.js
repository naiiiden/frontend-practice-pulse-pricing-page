import Logo from "../images/pulse-logo.svg";
import Menu from "../images/icon-menu.svg";
import { useState } from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const ToggleNav = () => setOpenMenu(!openMenu);

    return (
        <header>
            <img src={Logo} alt="Pulse's logo"/>
            <button aria-label="toggle-navigation" className="header--mobile--menu--toggle" onClick={ToggleNav}>
                <img src={Menu} alt=""/>
            </button>
            <nav className="header--nav">
                <ul className={`header--nav--ul ${!openMenu ? "" : "show"}`}>
                    <li><a href="" className="header--nav--ul--link">Features</a></li>
                    <li><a href="" className="header--nav--ul--link">Customer Stories</a></li>
                    <li><a href="" className="header--nav--ul--link">Pricing</a></li>
                    <li><a href="" className="header--nav--ul--link">Blog</a></li>
                    <li><a href="" className="header--nav--ul--link header--nav--ul--invisible">Contact</a></li>
                    <li><a href="" className="header--nav--ul--link header--nav--ul--invisible">Support</a></li>
                    <li className="header--nav--ul--li--sign-up"><a href="" className="header--nav--ul--sign-up">Sign Up</a></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;