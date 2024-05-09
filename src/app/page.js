import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Camo from "./../../public/camo2.jpg";


export default function Home() {
  return (
    <div className="relative">
      <div className="bg-cover bg-center fixed inset-0 z-0" style={{ backgroundImage: "url('/camo2.jpg')" }}></div>
      <main className="relative pt-0 z-10">
        <Navbar />
        <div className="container mt-24 mx-auto px-12  py-8 bg-white">
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
    </div>
  );
}
