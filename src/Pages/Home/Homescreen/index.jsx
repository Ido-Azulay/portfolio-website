import AboutMe from "../AboutMe";
import ConactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Footer from "../Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <ConactMe />
            <Footer />
        </>
    );
}