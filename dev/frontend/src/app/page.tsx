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
        unfocusedClassName="scale-[0.995] blur-[1px] opacity-50"
      >
        <HomeHero />
      </ScrollFocusBlock>

      <Navbar />

      <ScrollFocusBlock
        id="projects"
        unfocusedClassName="scale-[0.995] blur-[1px] opacity-50"
      >
        <HomeProjects />
      </ScrollFocusBlock>

      <ScrollFocusBlock
        id="experience"
        unfocusedClassName="scale-[0.995] blur-[1px] opacity-50"
      >
        <HomeExperience />
      </ScrollFocusBlock>

      <ScrollFocusBlock
        id="skills"
        unfocusedClassName="scale-[0.995] blur-[1px] opacity-50"
      >
        <HomeSkills />
      </ScrollFocusBlock>

      <ScrollFocusBlock
        id="about"
        unfocusedClassName="scale-[0.995] blur-[1px] opacity-50"
      >
        <HomeAbout />
      </ScrollFocusBlock>

      <ScrollFocusBlock
        id="contact"
        unfocusedClassName="scale-[0.995] blur-[1px] opacity-50"
      >
        <HomeContact />
      </ScrollFocusBlock>
    </ScrollFocusProvider>
  );
}