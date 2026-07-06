import { dashboard, ecommerce, furniture, makeup, moneySplit, chartDashboard, manglamPipes } from "@/assets/images";
export const PROJECTS = [
   {
    title: "GlobalBoard Platform",
    image: ecommerce,
    href:"https://www.globalboard.world/",
    tech: ["Node.js", "MongoDB", "Shadcn"],
    active: true,
  },
  {
    title: "Elegent Landing page",
    image: makeup,
    href:"https://mua-by-diksha.vercel.app/",
    tech: ["Next js", "Framer-Motion"],
    active: true,
  },
   {
    title: "Intelligence Visualization Dashboard",
    image: chartDashboard,
    href: "https://intelligence-visualization-dashboar.vercel.app/",
    tech: ["Next.js", "TypeScript", "D3.js", "REST API"],
    active: true,
  },
  {
    title: "Mangalam HDPE Pipes",
    image: manglamPipes,
    href: "https://managalam-hdpe-pipes.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
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
