export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                {/* <img src="./img/about-me.png" alt="About Me" /> */}
                <img src="./img/about me logo.svg" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    {/* <p className="section--title">About</p> */}
                    <h1 id="Title--fix" className="skills--section--heading">About Me</h1>
                    <br />
                    <p id="des" className="hero--section--description">I'm a third-year Computer Science student with a strong foundation in
                        programming languages like Python, C, C++, and JavaScript. I've built several projects, from OOP-based
                        applications to dynamic web interfaces.</p>
                    <p id="des" className="hero--section--description">After a brief health-related break, I’ve fully recovered and am now
                        focused on honing my skills through self-study and practical experience until I return to complete my studies,
                        as I have the time and full attention to dedicate to it.<br /> <br /> I’m passionate about problem-solving and eager to
                        contribute to innovative projects, particularly in software development. I am fluent in Hebrew and English,
                        with strong communication skills and a motivation to help others. Based in Tel Aviv, I’m looking for opportunities
                        to apply my technical skills in real-world environments.</p>
                </div>
            </div>
        </section>
    );
}  