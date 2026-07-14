import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";
import HomeExperience from "@/components/home/HomeExperience";
import HomeHero from "@/components/home/HomeHero";
import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import Navbar from "@/components/ui/Navbar";
import ScrollFocusBlock from "@/components/ui/ScrollFocusBlock";
import { ScrollFocusProvider } from "@/contexts/ScrollFocusContext";

export default function Home() {
  return (
    <ScrollFocusProvider>
      <ScrollFocusBlock
        id="hero"
      >
        <HomeHero />
      </ScrollFocusBlock>

      <Navbar />

      <HomeProjects />

      <ScrollFocusBlock
        id="experience"
      >
        <HomeExperience />
      </ScrollFocusBlock>

      <ScrollFocusBlock
        id="skills"
      >
        <HomeSkills />
      </ScrollFocusBlock>

      <ScrollFocusBlock
        id="about"
      >
        <HomeAbout />
      </ScrollFocusBlock>

      <ScrollFocusBlock
        id="contact"
      >
        <HomeContact />
      </ScrollFocusBlock>
    </ScrollFocusProvider>
  );
}