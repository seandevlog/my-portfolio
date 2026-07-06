type SkillCategory = 
  | "backend"
  | "data"
  | "frontend"
  | "languages"
  | "workflow"
  | "design";

export default interface Skills {
  category: SkillCategory;
  names: string[];
}