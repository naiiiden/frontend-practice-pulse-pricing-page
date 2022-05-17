import Logo from "../images/pulse-logo.svg";
import Menu from "../images/icon-menu.svg";

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Pulse's logo"/>
            <button aria-label="toggle-navigation" className="header--mobile--menu--toggle">
                <img src={Menu} alt=""/>
            </button>
            <nav className="header--nav">
                <ul className="header--nav--ul">
                    <li><a href="" className="header--nav--ul--link">Features</a></li>
                    <li><a href="" className="header--nav--ul--link">Customer Stories</a></li>
                    <li><a href="" className="header--nav--ul--link">Pricing</a></li>
                    <li><a href="" className="header--nav--ul--link">Blog</a></li>
                    <li><a href="" className="header--nav--ul--sign-up">Sign up</a></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;