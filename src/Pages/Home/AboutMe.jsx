
export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--inner">
                <div className="about--visual">
                    <img
                        src="/img/about me logo.svg"
                        alt="Personal IA monogram"
                        className="about--logo"
                    />
                </div>

                <div className="about--content">
                    <p className="about--eyebrow">
                        <span className="about--eyebrow--line" />
                        02 / ABOUT
                    </p>

                    <h2 className="about--heading">
                        A bit about me
                    </h2>

                    <div className="about--text">
                        <p>
                            I'm Ido Azulay, a Computer Science graduate
                            who enjoys building software, solving problems,
                            and working with people.
                        </p>

                        <p>
                            Before pursuing Computer Science, I spent
                            several years working and travelling in Israel
                            and abroad. I'm also a guitarist, and my varied
                            background has shaped how I communicate, adapt,
                            and approach problems from different perspectives.
                        </p>

                        <p>
                            Alongside my degree, I worked in building
                            operations, handling technical and operational
                            issues, coordinating with teams, and staying
                            calm under pressure. Balancing work and studies
                            strengthened my ability to manage priorities
                            and take responsibility.
                        </p>

                        <p>
                            During my studies, I worked on projects
                            involving web development, object-oriented
                            programming, cybersecurity, and data.
                            I particularly enjoy turning ideas into
                            working applications and breaking down
                            problems to understand their root causes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
