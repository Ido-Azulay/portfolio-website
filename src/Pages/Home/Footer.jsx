
import React from "react";
import { Link } from "react-scroll";

function Footer() {

    const links = [
        { label: "Home", to: "heroSection", offset: -80 },
        { label: "About Me", to: "AboutMe", offset: -40 },
        { label: "Portfolio", to: "MyPortfolio", offset: -20 },
        { label: "Contact", to: "Contact", offset: -80 },
    ];


    return (
        <footer className="footer--container">
            <nav className="footer--items" aria-label="Footer navigation">
                <ul>
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={link.offset}
                                duration={500}
                                className="text-md"
                                activeClass="navbar--active-content"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <hr className="divider" />

            <p className="footer--content">
                Made with 💖 by Ido
            </p>
        </footer>
    );
}

export default Footer;
