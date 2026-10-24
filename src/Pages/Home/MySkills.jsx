
const skillGroups = [
    {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Java"],
    },
    {
        title: "Web & Backend Development",
        skills: ["React", "Node.js", "Express", "FastAPI", "REST APIs"],
    },
    {
        title: "Databases & Tools",
        skills: ["PostgreSQL", "SQL", "MongoDB", "Git", "Postman"],
    },
    {
        title: "Systems & Networking",
        skills: [
            "HTTP/HTTPS",
            "TCP/IP",
            "DNS",
            "Troubleshooting",
            "Incident Management",
        ],
    },
];

export default function MySkills() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="skills--inner">
                <div className="skills--header">
                    <p className="skills--eyebrow">
                        <span className="skills--eyebrow--line" />
                        01 / SKILLS
                    </p>

                    <h2 className="skills--section--heading">
                        My Technical Toolkit
                    </h2>

                    <p className="skills--section--description">
                        Technologies and tools I've recently worked with through academic and personal projects.
                    </p>
                </div>

                <div className="skills--section--container">
                    {skillGroups.map((group) => (
                        <div className="skills--group" key={group.title}>
                            <h3 className="skills--group--title">
                                {group.title}
                            </h3>

                            <div className="skills--tags">
                                {group.skills.map((skill) => (
                                    <span className="skills--tag" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
