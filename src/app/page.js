import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import grid from "public/grid.png";


export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 bg-white">
        <HeroSection />
        <div className="my-80"></div> {/* Space between sections */}
        <Bio />
        <div className="my-80"></div> {/* Space between sections */}
        <ProjectsSection />
        <div className="my-80"></div> {/* Space between sections */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
