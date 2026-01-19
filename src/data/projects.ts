import { dashboard, ecommerce, furniture, moneySplit, portfolio } from "@/assets/images";
export const PROJECTS = [
  
  {
    title: "GlobalBoard Platform",
    image: ecommerce,
    href:"https://www.globalboard.world/",
    tech: ["Node.js", "MongoDB", "Shadcn"],
    active: true,
  },
  {
    title: "Admin Panel",
    image: dashboard,
    href:"http://194.31.150.64:4000/",
    tech: ["Next js", "SQL", "REST API"],
    active: true,
  },
  {
    title: "Furniture web app",
    image: furniture,
    href:"https://sahilfurniqulo.vercel.app/",
    tech: ["React js", "Tailwind", "Razorpay", "mongo db"],
    active: true,
  },
  {
    title: "Money Split App",
    image: moneySplit,
    href:"#",
    tech: ["React Native", "Postgress Sql"],
    active: false,
  }
];
