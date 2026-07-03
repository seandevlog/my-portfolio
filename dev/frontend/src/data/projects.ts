import type Project from "@/types/projects"

const Projects: Project[] = [
  {
    title: "San Lorenzo Ruiz",
    
    description: {
      short: 
        "A full-stack municipal web platform for publishing announcements, managing news content, and supporting organized public communication.",
      long:
        "A client project built to help a municipality manage public information through a structured content management platform. The system includes public-facing pages, admin content workflows, news publishing, article image handling, and backend data management."
    },

    status: "Handover Phase",
    type: "Client",

    system: ["Content Management Platform", "Municipal Web System"],

    scope: [
      "Frontend",
      "Backend API",
      "Database",
      "Admin Workflows",
      "Content Management",
      "Image Storage",
      "Deployment",
      "Client Requirements",
    ],

    stack: [
      "Next.js",
      "Spring Boot",
      "PostgreSQL",
      "Amazon S3",
      "Docker",
      "TypeScript",
      "Tailwind CSS",
      "Hibernate",
      "JPA",
    ],

    overview:
      "A full-stack municipal web platform focused on public information, content management, and administrative publishing workflows. I handled the system from planning and interface structure to frontend implementation, backend API development, database modeling, image storage workflows, and deployment-ready architecture",

    problem:
      "The municipality needed a more organized way to publish announcements, manage news content, and present public information through a clear and maintainable web platform",

    solution:
      "I designed and developed a structured platform with public-facing content sections, admin workflows for managing articles and announcements, backend API routes, PostgreSQL data models, and image storage integration using Amazon S3",

    features: [
      "Public-facing municipal information pages",
      "News and announcement publishing",
      "Admin content management workflows",
      "Draft and published content states",
      "Article image upload and storage",
      "Structured backend API routes",
      "Database-backed content records",
      "Responsive interface design",
    ],

    highlights: 
      "Built a full-stack content management system with Next.js, Spring Boot, PostgreSQL, and Amazon S3, focusing on maintainable government communication workflows, structured data, and secure admin-side content handling",

    architecture: {
      src: "placeholder-image.png",
      alt: "Architecture diagram for the municipal content management platform showing Next.js, Spring Boot, PostgreSQL, and Amazon S3",
    },

    screenshots: [
      {
        coverImage: {
          src: "placeholder-image.png",
          alt: "Municipal admin dashboard interface preview.",
        },
        description:
          "Admin dashboard for managing municipal announcements and news content.",
      },
      {
        coverImage: {
          src: "placeholder-image.png",
          alt: "Municipal article editor interface preview.",
        },
        description:
          "Article editor workflow for creating, updating, drafting, and publishing public content.",
      },
      {
        coverImage: {
          src: "/images/projects/municipal/public-news.png",
          alt: "Public municipal news page preview.",
        },
        description:
          "Public-facing news page for residents and visitors to view municipal updates.",
      },
    ],

    challenges: [
      "Challenge: Structuring public content and admin workflows clearly. Decision: Separated public-facing pages from admin management features. Result: The platform became easier to maintain and easier for users to understand.",
      "Challenge: Managing article images across admin and public pages. Decision: Used Amazon S3 for image storage and connected image metadata to content records. Result: The project gained a more scalable and maintainable media workflow.",
      "Challenge: Translating client requirements into a working system. Decision: Broke the platform into content sections, API routes, and database models. Result: The project became easier to build, test, and expand.",
    ],
  },
  
  {
    title: "Inventory Tracker",

    description: {
      short:
        "A MERN inventory management system for tracking items, orders, shipments, refunds, billing, and transaction records.",
      long:
        "My first personal full-stack project, built while actively learning and applying as many practical full-stack features as I could. The project focuses on inventory records, orders, shipments, refunds, billing, authentication, validation, image uploads, and related transaction activity. Because it was built as a learning-heavy project, the interface is less polished than my newer work, but it shows my growth in backend structure, feature planning, and full-stack problem solving."
    },

    status: "Live",
    type: "Personal",

    system: ["Inventory Management System", "Business Workflow Tool"],

    scope: [
      "Frontend",
      "Backend API",
      "Database",
      "Authentication",
      "Validation",
      "Image Uploads",
      "CRUD Workflows",
      "Deployment",
      "Documentation",
    ],

    stack: [
      "React",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Mongoose",
      "Joi",
      "Multer",
      "Vercel",
    ],

    overview:
      "Inventory Tracker is my first personal full-stack MERN application, built while I was actively learning how to connect frontend interfaces, backend REST APIs, database models, authentication, validation, image uploads, and business workflows. The design is not as polished as my newer work because I used the project to practice and apply many features at once, but it represents an important step in my growth as a full-stack developer.",

    problem:
      "Inventory-related records can become scattered when item details, orders, shipments, refunds, billing, and transactions are tracked separately. The goal of this project was to organize those workflows into one centralized system.",

    solution:
      "I built a full-stack inventory management system with React on the frontend, an Express REST API on the backend, MongoDB and Mongoose for data storage, JWT and Bcrypt for authentication, Joi for validation, and Cloudinary with Multer for image uploads.",

    features: [
      "Add new inventory items",
      "Update item details including description, price, category, and stock",
      "Remove or deactivate inventory items",
      "Track item conditions",
      "Create and view orders",
      "Add shipment reviews",
      "Add refunds",
      "Create billing entries per item",
      "View billing history",
      "View item summaries with related transactions and order activity",
      "JWT-based authentication",
      "Image uploads with Cloudinary",
    ],

    highlights:
      "Built my first personal full-stack MERN inventory system with REST API routes, MongoDB schemas, JWT authentication, Joi validation, Cloudinary image uploads, and organized workflows for inventory, orders, shipments, refunds, billing, and transaction records. The project is feature-heavy and learning-focused, showing my early process of applying many full-stack concepts in one system.",

    architecture: {
      src: "placeholder-image.png",
      alt: "Architecture diagram for Inventory Tracker showing React, Express, MongoDB, Mongoose, JWT, and Cloudinary.",
    },

    screenshots: [
      {
        coverImage: {
          src: "placeholder-image.png",
          alt: "Inventory Tracker transactions table preview.",
        },
        description:
          "Transactions table for reviewing inventory-related activity and records.",
      },
      {
        coverImage: {
          src: "placeholder-image.png",
          alt: "Inventory Tracker order detail preview.",
        },
        description:
          "Order view showing order-related details connected to inventory records.",
      },
      {
        coverImage: {
          src: "placeholder-image.png",
          alt: "Inventory Tracker stock view preview.",
        },
        description:
          "Stock view for reviewing item details, quantities, and inventory status.",
      },
    ],

    challenges: [
      "Challenge: Connecting multiple inventory workflows together. Decision: Organized the system around inventory items, orders, shipments, refunds, billing, and transactions. Result: Users can view related activity from a more centralized structure.",
      "Challenge: Handling secure user sessions. Decision: Used JWT for authentication and Bcrypt for password hashing. Result: The system gained a more realistic authentication flow.",
      "Challenge: Managing uploaded item images. Decision: Used Multer for upload handling and Cloudinary for image storage. Result: Inventory records could include external image assets without storing files directly in the app.",
      "Challenge: Keeping backend data reliable. Decision: Used Joi validation and structured Express routes. Result: API requests became easier to validate, debug, and maintain.",
      "Challenge: Balancing learning with design polish. Decision: Prioritized building and connecting full-stack features such as authentication, validation, image uploads, CRUD workflows, and related records. Result: The final interface is less polished, but the project helped me practice many real application patterns and understand how full-stack systems fit together."
    ],
  },

  {
    title: "Workout Apparel Store",

    description: {
      short:
        "An Express and EJS workout apparel website focused on server-side validation, email integration, dynamic routing, and deployment practice.",
      long:
        "An academic web application built as a workout apparel store using Express.js and EJS. The project focused on server-side form validation, contact form email integration, dynamic EJS pages, Express routing, and deploying a Node/Express application to Vercel.",
    },

    status: "Archived",
    type: "Academic",

    system: ["E-Commerce Website", "Server-Rendered Web App"],

    scope: [
      "Backend Routing",
      "Server-Side Rendering",
      "Form Validation",
      "Email Integration",
      "Deployment",
      "Documentation",
    ],

    stack: [
      "Express",
      "EJS",
      "JavaScript",
      "Vercel",
      "HTML",
      "CSS",
    ],

    overview:
      "Workout Apparel Store is a server-rendered academic project built with Express.js and EJS. The project focused on learning backend routing, dynamic page rendering, form handling, secure server-side validation, email integration, and deployment using Vercel.",

    problem:
      "The project was created to practice building a functional server-rendered web application with backend form handling, validation, email functionality, and deployment, instead of relying only on static pages.",

    solution:
      "I built an Express.js application with EJS views, dynamic routing, server-side form validation, contact form email integration, and deployment configuration for Vercel.",

    features: [
      "Express routing",
      "Dynamic EJS pages",
      "Server-side form validation",
      "Contact form email integration",
      "Static asset organization",
      "Vercel deployment setup",
      "Local development setup with environment variables",
    ],

    highlights:
      "Built a server-rendered Express and EJS application focused on backend routing, secure form validation, contact form email integration, and deployment workflow practice.",

    architecture: {
      src: "/images/projects/workout-apparel-store/architecture.png",
      alt: "Architecture diagram for Workout Apparel Store showing Express.js, EJS views, form validation, email integration, and Vercel deployment.",
    },

    screenshots: [
      {
        coverImage: {
          src: "/images/projects/workout-apparel-store/home.png",
          alt: "Workout Apparel Store homepage preview.",
        },
        description:
          "Homepage for the workout apparel store academic project.",
      },
      {
        coverImage: {
          src: "/images/projects/workout-apparel-store/products.png",
          alt: "Workout Apparel Store product page preview.",
        },
        description:
          "Product-focused page for browsing workout apparel content.",
      },
      {
        coverImage: {
          src: "/images/projects/workout-apparel-store/contact.png",
          alt: "Workout Apparel Store contact form preview.",
        },
        description:
          "Contact form interface connected to server-side validation and email integration.",
      },
    ],

    challenges: [
      "Challenge: Validating user input safely. Decision: Handled validation on the server instead of only relying on the frontend. Result: The form workflow became more reliable and realistic.",
      "Challenge: Adding email functionality to a backend app. Decision: Integrated email handling through the Express application. Result: The contact form became functional beyond static submission.",
      "Challenge: Deploying a Node/Express project. Decision: Configured the app for Vercel deployment. Result: I learned how to prepare a server-rendered Express project for a hosted environment.",
    ],
  }
];

export default Projects;