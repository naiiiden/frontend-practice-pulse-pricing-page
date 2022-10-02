import Logo from "../images/pulse-logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer--logo--signup--container">
                <img src={Logo} alt="Pulse's logo" className="footer--logo"/>
                <a href="https://signup.pulseapp.com/plus" className="footer--link--sign-up">Sign Up for a Free 30-Day Trial</a>
            </div>
            <nav className="footer--nav" aria-label="Footer">
                <ul className="footer--nav--ul">
                    <li>Product</li>
                    <li><a href="https://pulseapp.com/features">Features</a></li>
                    <li><a href="https://pulseapp.com/pricing">Pricing</a></li>
                    <li><a href="https://signup.pulseapp.com/">Sign Up</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li>Company</li>
                    <li><a href="https://pulseapp.com/customer-stories">Customer Stories</a></li>
                    <li><a href="https://pulseapp.com/about">About</a></li>
                    <li><a href="https://pulseapp.com/pricing#">Contact</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li>Resources</li>
                    <li><a href="https://help.pulseapp.com/">Support</a></li>
                    <li><a href="https://pulseapp.com/blog">Blog</a></li>
                </ul>
            </nav>
            <p className="footer--copyright">©2019 Pulseapp.com, Inc. All Rights Reserved | <a href="https://pulseapp.com/terms">Terms of Use</a> | <a href="https://pulseapp.com/privacy">Privacy Policy</a> | <a href="https://pulseapp.com/eu-privacy">EU Privacy</a><br/>Pulse is made by <a href="https://simplefocus.com/">Simple Focus</a>. We also make <a href="https://getballpark.com/">Ballpark</a>, <a href="https://sifterapp.com/">Sifter</a>, and <a href="https://curated.co/">Curated</a>.</p>
        </footer>
    )
}

export default Footer;