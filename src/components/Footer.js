import Logo from "../images/pulse-logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer--logo--signup--container">
                <img src={Logo} alt="Pulse's logo" className="footer--logo"/>
                <a href="" className="footer--link--sign-up">Sign Up for a Free 30-Day Trial</a>
            </div>
            <nav className="footer--nav">
                <ul className="footer--nav--ul">
                    <li>Product</li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Sign Up</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li>Company</li>
                    <li><a href="">Customer Stories</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li>Resources</li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </nav>
            <p>©2019 Pulseapp.com, Inc. All Rights Reserved | <a href="">Terms of Use</a> | <a href="">Privacy Policy</a> | <a href="">EU Privacy</a>
            Pulse is made by <a href="">Simple Focus</a>. We also make <a href="">Ballpark</a>, <a href="">Sifter</a>, and <a href="">Curated</a>.</p>
        </footer>
    )
}

export default Footer;