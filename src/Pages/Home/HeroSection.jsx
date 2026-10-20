
import CvButton from "./CvButton";
import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section hero--modern">
            <div className="hero--modern--top">
                <span className="hero--modern--eyebrow">
                    <span aria-hidden="true">&lt;/&gt;</span>
                    PORTFOLIO / 2026
                </span>


            </div>

            <div className="hero--modern--layout">
                <div className="hero--modern--main">
                    <span className="hero--modern--availability">
                        <span className="hero--modern--status-dot" />
                        Open to opportunities
                    </span>
                    <p className="hero--modern--greeting">
                        <span aria-hidden="true">&gt; </span>
                        Hello, world! 👋
                    </p>

                    <h1 className="hero--modern--title">
                        I'm <span>Ido Azulay.</span>
                    </h1>

                    <p className="hero--modern--subtitle">
                        Computer Science Graduate
                    </p>

                    <p className="hero--modern--description">
                        I'm a Computer Science graduate with hands-on
                        experience building applications, working with
                        APIs and databases, and solving technical problems.
                        I enjoy understanding how systems work, learning
                        new technologies, and collaborating with others.
                    </p>

                    <div className="hero--modern--actions">
                        <Link
                            to="Contact"
                            smooth={true}
                            spy={true}
                            offset={80}
                            duration={500}
                            className="hero--modern--primary-btn"
                        >
                            Reach Out <span aria-hidden="true">↗</span>
                        </Link>

                        <div className="hero--modern--cv">
                            <CvButton id="CvButton" />
                        </div>
                    </div>
                </div>

                <div className="hero--modern--editor" aria-label="Code-themed introduction">
                    <div className="hero--modern--editor-header">
                        <div className="hero--modern--window-dots" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span>about.js</span>
                        <span className="hero--modern--editor-language">JS</span>
                    </div>

                    <div className="hero--modern--editor-body">
                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">01</span>
                            <span className="hero--modern--comment">// A little about me</span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">02</span>
                            <span>
                                <span className="hero--modern--keyword">const</span>
                                {" ido = {"}
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">03</span>
                            <span className="hero--modern--indent">
                                education: <span className="hero--modern--string">"Computer Science"</span>,
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">04</span>
                            <span className="hero--modern--indent">
                                interests: [
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">05</span>
                            <span className="hero--modern--indent-double">
                                <span className="hero--modern--string">"Software Development"</span>,
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">06</span>
                            <span className="hero--modern--indent-double">
                                <span className="hero--modern--string">"Systems & Technology"</span>,
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">07</span>
                            <span className="hero--modern--indent-double">
                                <span className="hero--modern--string">"Problem Solving"</span>
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">08</span>
                            <span className="hero--modern--indent">
                                ],
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">09</span>
                            <span className="hero--modern--indent">
                                enjoysCollaboration: <span className="hero--modern--keyword">true</span>
                            </span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">10</span>
                            <span>{"};"}</span>
                        </div>

                        <div className="hero--modern--code-line">
                            <span className="hero--modern--line-no">11</span>
                            <span className="hero--modern--comment">// Always learning.</span>
                        </div>
                    </div>

                    <div className="hero--modern--editor-footer">
                        <span>JavaScript</span>
                        <span>UTF-8 · Ln 11</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
