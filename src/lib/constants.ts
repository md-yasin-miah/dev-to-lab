import {
  Code2,
  Smartphone,
  Cloud,
  Zap,
  Shield,
  Rocket,
  Clock,
  Database,
  Layout,
  Server,
  CreditCard,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "DevToLab",
  nameSuffix: "Lab",
  namePrefix: "DevTo",
  description:
    "DevToLab is an elite software farm specializing in high-performance Web and Mobile solutions for visionary brands.",
  url: "https://devtolab.com", // Placeholder
};


export const METRICS = [
  { id: 1, label: "Uptime Architecture", value: "99.9%", icon: Shield },
  { id: 2, label: "Projects Delivered", value: "50+", icon: Rocket },
  { id: 3, label: "Time-to-Market", value: "10x Faster", icon: Zap },
  { id: 4, label: "Expert Support", value: "24/7", icon: Clock },
];

export const SERVICES = [
  {
    id: "web",
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js, React, and RTK Query.",
    icon: Code2,
  },
  {
    id: "mobile",
    title: "Mobile Solutions",
    description:
      "Native-quality iOS & Android apps using Flutter and React Native.",
    icon: Smartphone,
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description:
      "Scalable backend solutions with Supabase, AWS, and Serverless architecture.",
    icon: Cloud,
  },
];

export const TECH_STACK = [
  { name: "Next.js", icon: Layout },
  { name: "Redux", icon: Database }, // Using generic database icon for state management representation
  { name: "Supabase", icon: Server },
  { name: "Tailwind CSS", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Flutter", icon: Smartphone },
  { name: "PostgreSQL", icon: Database },
  { name: "Stripe", icon: CreditCard },
  { name: "Framer Motion", icon: Zap },
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Application",
    image: "/images/case-study-1.jpg", // Placeholder
    description:
      "A real-time financial analytics dashboard handling millions of transactions.",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    category: "Mobile App",
    image: "/images/case-study-2.jpg", // Placeholder
    description: "A seamless shopping experience with AR product preview.",
  },
];
