import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
  return (
    <div className="relative">
      <main className="relative pt-0 z-10">
        <Navbar />
        <div className="container mt-24 mx-auto px-12  py-8 bg-white">
          <HeroSection />
          <div className="my-64"></div> 
          <Bio />
          <div className="my-40"></div> 
          <SkillsSection />
          <div className="my-40"></div> 
          <ProjectsSection />
          <div className="my-40"></div> 
          <EmailSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
