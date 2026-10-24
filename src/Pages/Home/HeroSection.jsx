
import CvButton from "./CvButton";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const codeLines = [
    "// A little about me",
    "const ido = {",
    '  education: "Computer Science",',
    "  interests: [",
    '    "Software Development",',
    '    "Systems & Technology",',
    '    "Problem Solving"',
    "  ],",
    "  enjoysCollaboration: true",
    "};",
    "// Always learning."
];

function TypedCode() {
    const [visibleCharacters, setVisibleCharacters] = useState(0);

    const fullCode = codeLines.join("\n");

    useEffect(() => {
        if (visibleCharacters >= fullCode.length) return;

        const timeout = setTimeout(() => {
            setVisibleCharacters((previous) => previous + 1);
        }, 56);

        return () => clearTimeout(timeout);
    }, [visibleCharacters, fullCode.length]);

    const visibleLines = fullCode
        .slice(0, visibleCharacters)
        .split("\n");

    const activeLine = visibleLines.length - 1;

    function highlightCode(line, index) {
        if (index === 0 || index === 10) {
            return <span className="hero--modern--comment">{line}</span>;
        }

        if (index === 1) {
            return (
                <>
                    <span className="hero--modern--keyword">
                        {line.slice(0, 5)}
                    </span>
                    {line.slice(5)}
                </>
            );
        }

        if (index === 8) {
            const keywordIndex = line.indexOf("true");

            if (keywordIndex === -1) return line;

            return (
                <>
                    {line.slice(0, keywordIndex)}
                    <span className="hero--modern--keyword">
                        {line.slice(keywordIndex)}
                    </span>
                </>
            );
        }

        if ([2, 4, 5, 6].includes(index)) {
            const quoteStart = line.indexOf('"');

            if (quoteStart === -1) return line;

            const quoteEnd = line.indexOf('"', quoteStart + 1);

            return (
                <>
                    {line.slice(0, quoteStart)}
                    <span className="hero--modern--string">
                        {quoteEnd === -1
                            ? line.slice(quoteStart)
                            : line.slice(quoteStart, quoteEnd + 1)}
                    </span>
                    {quoteEnd === -1 ? "" : line.slice(quoteEnd + 1)}
                </>
            );
        }

        return line;
    }

    return (
        <div className="hero--modern--typed-code">
            {codeLines.map((_, index) => {
                const visibleLine = visibleLines[index];

                return (
                    <div className="hero--modern--code-line" key={index}>
                        <span className="hero--modern--line-no">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="hero--modern--typed-line">
                            {visibleLine !== undefined && (
                                <>
                                    {highlightCode(visibleLine, index)}

                                    {index === activeLine &&
                                        visibleCharacters < fullCode.length && (
                                            <span className="hero--modern--cursor" />
                                        )}
                                </>
                            )}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

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
                        I love technology, solving problems, and collaborating with others.
                        <br />
                        I recently graduated with a degree in Computer Science, where I explored software development, web technologies, databases, and cybersecurity through hands-on projects.
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
                        <TypedCode />
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
