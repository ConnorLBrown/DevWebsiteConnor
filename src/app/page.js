import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import Background from "./../../public/gradient.png"


export default function Home() {
  return (
    <div className="relative">
      <main className="relative pt-0 z-10">
        <div className="bg-slate-700">
        <Navbar />
        <div className="container mt-30 mx-auto px-12 py-32 bg-slate-700">
        <HeroSection />
        </div>
        </div>
        <div className="bg-slate-500">
        <div className="container mx-auto px-12 py-8">
          <Bio />
          </div>
          </div>
          <div className="bg-zinc-400">
        <div className="container  mx-auto px-12 py-8">
        <SkillsSection />
          </div>
          </div>
          <div className="bg-gray-200">
        <div className="container mx-auto px-12 py-8">
        <ProjectsSection />
          </div>
          </div>
          <div className="bg-stone-50">
        <div className="container  mx-auto px-12 py-8">
        <EmailSection />
          </div>
          </div>
          <div className="bg-black">
        <div className="container  mx-auto px-12 py-8">
        <Footer />
          </div>
          </div>
      </main>
    </div>
  );
}
