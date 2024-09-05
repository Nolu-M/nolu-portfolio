import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";

import ExpenseApp from '../assets/images/projects/expense.png';
import JobListing from '../assets/images/projects/job-listing.png';
import PasswordGen from '../assets/images/projects/password-generator.png';
import EduPalApp from '../assets/images/projects/edupal.png';
import EcommerceApp from '../assets/images/projects/e-commerce.png';
import Ayoba from '../assets/images/projects/ayoba.png';




export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uril: "",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaYoutube,
    uril: "",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `edupal-${Date.now()}`,
    name: "EduPal App",
    imgSrc: EduPalApp,
    gitURL: "https://github.com/nolu-m",
  },
  {
    id: `ayoba-${Date.now()}`,
    name: "Ayoba App",
    imgSrc: Ayoba,
    gitURL: "https://github.com/nolu-m",
  },
  {
    id: `e-commerce-${Date.now()}`,
    name: "E-commerce App",
    imgSrc: EcommerceApp,
    gitURL: "https://github.com/nolu-m",
  },
  {
    id: `expenseapp-${Date.now()}`,
    name: "Expense App",
    imgSrc: ExpenseApp,
    gitURL: "https://github.com/nolu-m",
  },
  {
    id: `joblisting-${Date.now()}`,
    name: "Job listing website",
    imgSrc: JobListing,
    gitURL: "https://github.com/nolu-m",
  },
  {
    id: `passwordgenerator-${Date.now()}`,
    name: "Password generator",
    imgSrc: PasswordGen,
    gitURL: "https://github.com/nolu-m",
  },
 
];