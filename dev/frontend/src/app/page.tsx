import HomeAbout from "@/components/home/HomeAbout";
import HomeExperience from "@/components/home/HomeExperience";
import HomeHero from "@/components/home/HomeHero";
import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <HomeHero/>
      <Navbar/>
      <HomeProjects/>
      <HomeExperience/>
      <HomeSkills/>
      <HomeAbout/>
    </>
  );
}
