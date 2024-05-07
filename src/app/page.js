import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import WhiteDivider from "./components/WhiteDivider";


export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <WhiteDivider />
        <Bio />
        <WhiteDivider />
        <SkillsSection />
        <WhiteDivider />
        <ProjectsSection />
        <WhiteDivider />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
