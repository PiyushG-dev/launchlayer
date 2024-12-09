import {
  Cpu,
  ChartLine,
  Phone,
  HandCoins,
  Star,
  Navigation,
} from "lucide-react";

export const navlinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Components",
    href: "/components",
  },
];

export const componentPages = [
  {
    id: 1,
    icon: <Cpu />,
    name: "Hero sections",
    desc: "The hero section of a website is the first visual area that visitors see",
    href: "/components/hero",
    status: "available",
  },
  {
    id: 2,
    icon: <ChartLine />,
    name: "Feature sections",
    desc: "The hero section of a website is the first visual area that visitors see",
    href: "/components/feature",
    status: "available",
  },
  {
    id: 3,
    icon: <Phone />,
    name: "CTA sections",
    desc: "The hero section of a website is the first visual area that visitors see",
    href: "components/cta",
    status: "available",
  },
  {
    id: 4,
    icon: <HandCoins />,
    name: "Pricing sections",
    desc: "The hero section of a website is the first visual area that visitors see",
    href: "/components/pricing",
    status: "NA",
  },
  {
    id: 5,
    icon: <Star />,
    name: "Testimonial sections",
    desc: "The hero section of a website is the first visual area that visitors see",
    href: "components/testimonial",
    status: "NA",
  },
  {
    id: 6,
    icon: <Navigation />,
    name: "Navigation",
    desc: "The hero section of a website is the first visual area that visitors see",
    href: "components/navigation",
    status: "NA",
  },
];
