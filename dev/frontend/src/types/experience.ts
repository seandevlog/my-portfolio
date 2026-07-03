type ExperienceCategories =
  | "Development"
  | "Business"
  | "Service";

export default interface Experience {
  timeline: string;
  company: string;
  role: string;
  description: string;
  category: ExperienceCategories;
}