
import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--header">
                    <p className="portfolio--eyebrow">
                        <span className="portfolio--eyebrow--line" />
                        03 / PROJECTS
                    </p>

                    <h2 className="portfolio--heading">
                        Selected Projects
                    </h2>

                    <p className="portfolio--intro">
                        A few recent projects I've enjoyed working on.
                    </p>
                </div>

                <a
                    href="https://github.com/Ido-Azulay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio--github"
                >
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.3c.98 0 1.97.13 2.89.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.03.78 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                    View GitHub Profile
                    <span aria-hidden="true">↗</span>
                </a>
            </div>

            <div className="portfolio--section--container">
                {data.portfolio.map((item) => (
                    <article
                        key={item.id}
                        className="portfolio--section--card"
                    >
                        <div className="portfolio--section--img">
                            <img
                                src={item.src}
                                alt={`${item.title} project preview`}
                                loading="lazy"
                            />
                        </div>

                        <div className="portfolio--section--card--content">
                            <div className="portfolio--card--main">
                                <div className="portfolio--card--title-row">
                                    <h3 className="portfolio--section--title">
                                        {item.title}
                                    </h3>

                                    {item.status && (
                                        <span className="portfolio--status">
                                            {item.status}
                                        </span>
                                    )}
                                </div>

                                {item.technologies && (
                                    <div className="portfolio--tech-list">
                                        {item.technologies
                                            .split("·")
                                            .map((tech) => tech.trim())
                                            .filter(Boolean)
                                            .map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="portfolio--tech-tag"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                    </div>
                                )}

                                <p className="portfolio--description">
                                    {item.description}
                                </p>
                            </div>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio--link"
                                >
                                    View on GitHub
                                    <span aria-hidden="true">↗</span>
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
