
import CvButton from "./CvButton";
import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p id="meTitle" className="section--title">
                        Hey, I'm Ido Azulay 👋
                    </p>

                    <h1 className="hero--section--title">
                        <span
                            id="Title--fix"
                            className="hero--section-title--color"
                        >
                            COMPUTER SCIENCE <br />
                            GRADUATE
                        </span>{" "}
                        <br />
                    </h1>

                    <p id="des" className="hero--section-description">
                        <br /><br />
                        I'm a Computer Science graduate with a background in
                        software development and a strong interest in
                        problem-solving and understanding how systems work.

                        <br /><br />
                        Through academic and personal projects, I've gained
                        hands-on experience building applications, working
                        with APIs and databases, and solving technical problems.
                        <br /><br />
                        I enjoy learning new technologies, figuring out how
                        things work, and collaborating with others.

                        <br /><br />
                        Feel free to{" "}
                        <Link
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={120}
                            duration={500}
                            to="Contact"
                            className="footer--items point"
                            id="reachOut"
                        >
                            reach out
                        </Link>
                        {" "}— I'd be happy to connect!                    </p>
                </div>

                <br /><br />
                <CvButton id="CvButton" />
            </div>

            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Portfolio illustration" />
            </div>
        </section>
    );
}
