type ProjectStatus = 
  | "Planning" 
  | "Designing" 
  | "Developing" 
  | "Testing"
  | "Handover Phase"
  | "Live"
  | "Private"
  | "Archived";

type ProjectType = 
  | "Client"
  | "Personal"
  | "Academic"
  | "Professional"
  | "Prototype"
  | "Open Source";

type ProjectImage = {
  src: string,
  alt: string,
}

type ProjectPreview = {
  coverImage: ProjectImage,
  /**
   * What does the image represent
   */
  description: string
}

export default interface Project {
  title: string,
  date: Date,
  description: {
    short: string,

    /**
     * Short description of the project. Project intention. Project components.
     */
    long: string,
  },
  status: ProjectStatus,

  type: ProjectType,

  /**
   * What kind of system this project is.
   * Example: Content Management Platform, Inventory Management System.
   */
  system: string[],

  /**
   * What parts of the project I personally handled.
   * Example: Frontend, Backend API, Database, Admin Workflows.
   */
  scope: string[],

  /**
   * Technologies used in the project.
   */
  stack: string[],

  /**
   * Description of project. What I did on this project. What this project is focused on.
   */
  overview: string,

  /**
   * Problem observed that this project solves. The goal of this project.
   */
  problem: string,

  /**
   * What actions did I take to accomplish this project.
   */
  solution: string,

  features: string[],

  /**
   * Description of project. What I did on this project. What this project is focused on.
   */
  highlights: string,

  architecture: ProjectImage,

  screenshots: ProjectPreview[],

  /**
   * What are the challenges and decisions made on each
   */
  challenges: string[],

  links?: {
    github?: string,
    live?: string;
  }
}