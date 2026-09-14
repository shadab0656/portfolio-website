import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ApproachSection from "@/components/ApproachSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <SkillsSection />
        <ApproachSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}




// import AboutSection from "@/components/AboutSection";
// import Experience from "@/components/Experience";
// import HeroSection from "@/components/HeroSection";
// import ProjectsSection from "@/components/ProjectsSection";
// export default function Home() {
//   return (
//     <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <ProjectsSection />
//     </main>
//   );
// }
