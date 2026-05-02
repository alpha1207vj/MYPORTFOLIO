// ─── Portfolio Data ────────────────────────────────────────────────
// Edit this file to update your personal info, jobs, projects, etc.

export const PERSONAL = {
  name: "Joel CODJA(K-O-J-A)",
  initials: "AC",
  company: "Humanforce",
  tagline: "21yo <strong class='text-white'>Frontend Developer</strong> living <strong class='text-white'>Benin</strong> 🇧🇯. I build fast, modern web applications and turn ideas into reality.",
  email: "gide749@gmail.com",
  github: "https://github.com/alpha1207vj",
  githubUsername: "CJ.DEV",
  linkedin: "https://www.linkedin.com/in/joel-codja-4356a2361/",
  twitter: "https://x.com/Gide749Gide",
  bio: "Frontend developer with 3 years of experience building production apps in <strong class='text-white'>React</strong>, <strong class='text-white'>Next.js</strong>, and <strong class='text-white'>TypeScript</strong>. I turn complex requirements into smooth, accessible interfaces. Focus on performance, clean code, and user experience.",
};

export const SKILLS = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
];

export interface ExperienceDetail {
  initials: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
   logo?: string; // ← add this
}

// Use ONLY this EXPERIENCE array - delete the old one
export const EXPERIENCE: ExperienceDetail[] = [
  { 
    initials: "IFRI",
    logo: "/logos/ifri.jpg", // ← add your image to public/logos/
    role: "Full-Stack Developer (Hackathon)", 
    company: "IFRI - UAC (Institut de Formation et de Recherche en Informatique)", 
    period: "February 2026",
    description: [
      "Developed a comprehensive administration management system for the university institute.",
      "Built modules for student registration, course enrollment, grade management, and attendance tracking.",
      "Created an administrative dashboard for staff to manage academic records and generate reports.",
      "Implemented secure authentication and role-based permissions for students, teachers, and admin staff."
    ],
    technologies: ["Next.js", "Laravel", "Tailwind CSS", "MySQL", "REST APIs"]
  },
  { 

    initials: "IC",
     logo: "/logos/imathecode.jpg",
    role: "Full-Stack Developer (Hackathon)", 
    company: "Fondation I Am The Code", 
    period: "December 2025",
    description: [
      "Built an edtech platform enabling teachers to deliver online courses and earn revenue, while allowing students to access paid educational content and monetize their tutoring skills.",
      "Implemented secure payment integration for course purchases and instructor payouts.",
      "Developed course management system with video uploads, quizzes, and progress tracking.",
      "Created user dashboards for both teachers and students with role-based access control."
    ],
    technologies: ["React", "Laravel", "Tailwind CSS", "MySQL", "REST APIs", "Payment Gateway"]
  },

];

export interface Education {
  initials: string;
  degree: string;
  institution: string;
  period: string;
    logo?: string; 
}

export const EDUCATION: Education[] = [
  {
    initials: "IFRI",
     logo: "/logos/ifri.jpg", 
    degree: "Bachelor of IT (Computer Science)",
    institution: "Institut de Formation et de Recherre en Informatique",
    period: "2023 — Present(Not done yet)",
  },
];

export interface Tag {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  tags: Tag[];
  github?: string;
  demo?: string;
  preview: "jobportal" | "kanban" | "crypto" | "desktop" | "auction" | "arduino";
}

export const PROJECTS: Project[] = [
  {
    id: "auction",
    title: "Contrasto-WCAG CONTRAST COLOR CHECKER",
    desc: "Check color contrast ratios instantly and ensure your designs meet WCAG AA and AAA accessibility standards.",
    longDesc: "Check color contrast ratios instantly and ensure your designs meet WCAG AA and AAA accessibility standards.Built for designers and developers who cares about accessibility.",
    tags: [
      { name: "Next JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
         { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
    github: "https://github.com/alpha1207vj/CHECKERCONTRASTOWCAG",
    demo: "https://codja.vercel.app",
    preview: "auction",
  },
  {
  id: "arduino",
  title: "My Portfolio Website",
  desc: "Personal portfolio built with Next.js and Tailwind CSS, featuring smooth animations, and a working contact form.",
  longDesc: "A fully responsive personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features include scroll reveal animations, a live GitHub contribution heatmap, project showcases, work experience timeline, and an EmailJS-powered contact form.",
  tags: [
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  ],
  github: "https://github.com/alpha1207vj",
  demo: "https://yourportfolio.vercel.app",
  preview: "arduino",
},
];

export interface Post {
  title: string;
  tag: string;
  date: string;
  href: string;
}

export const POSTS: Post[] = [];