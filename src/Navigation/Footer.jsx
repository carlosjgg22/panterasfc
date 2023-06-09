import Nav from "./Nav";
import "../components/styles/stylesheet.css";

const Footer = () => {

    return (
        <div>
            <footer>
                <div className="container footer navigation-links">
                    <a href="https://www.facebook.com" className="text-decoration-none link-light" target="_blank" rel="noreferrer"><Nav title="Facebook" /></a>
                    <a href="https://www.twitter.com" className="text-decoration-none link-light" target="_blank" rel="noreferrer"><Nav title="Twitter" /></a>
                    <a href="https://www.instagram.com" className="text-decoration-none link-light" target="_blank" rel="noreferrer"><Nav title="Instagram" /></a>
                    <a href="https://www.grindr.com" className="text-decoration-none link-light" target="_blank" rel="noreferrer"><Nav title="Grinder" /></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;