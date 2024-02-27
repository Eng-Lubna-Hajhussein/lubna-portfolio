import { Box } from "@mui/material";
import {
  BiLogoBehance,
  BiLogoYoutube,
  BiLogoLinkedin,
  BiLogoGithub,
  BiSolidBank,
} from "react-icons/bi";

import { CgWebsite } from "react-icons/cg";
import { PiNumberFiveBold } from "react-icons/pi";
import codewarsLogo from "assets/logo.f607a0fb.svg";
import linkedinIcon from "assets/linkedIn.svg";
import databaseDesignImg from "assets/database.png";
import reusableSubsystemsImg from "assets/reusable_subsystems.png";
import reusableUIImg from "assets/reusable_ui.png";
import uXUIImg from "assets/UX_UI.png";
import dataAnalysisImg from "assets/data-analysis.png";
import projectManagementImg from "assets/project-management.png";

export default {
  name: "Lubna Hajhussein",
  job: "Full Stack Web Developer",
  email: "hajhussein.lubna@gmail.com",
  phone: "+962 786912147",
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/lubna-hajhussein-6968721b4",
      text: "lubna-hajhussein",
      img: linkedinIcon,
    },
    Github: {
      link: "https://github.com/Eng-Lubna-Hajhussein",
      text: "Eng-Lubna-Hajhussein",
      icon: <BiLogoGithub />,
    },
    Codewar: {
      link: "https://www.codewars.com/users/Lubna-Hajhussein",
      text: "Lubna-Hajhussein",
      img: codewarsLogo,
    },
  },
  about:
    "Experienced JavaScript Full-Stack Web Developer With 3 Years In The Industry. Proficient with React, where I enjoy making reusable components and subsystems, I have even started building my own React UI library, inspired by modern UI libraries such as Bootstrap and Mui. Also, I have built strong skills in database design and backend development.",
  experiences: [
    {
      title: "frontend ReactJS developer - CBM integrated software Inc.",
      date: "Oct 2022 - Dec 2023",
      description:
        "Support clients requirements, Create websites to improve and increase client professionalism and being a part of a great cooperative team.",
    },
    {
      title: "full Stack developer (Trainee) - CBM integrated software Inc.",
      date: "Oct 2020 - Oct 2021",
      description:
        "During This Training I have gained a strong skills in NodeJS, GraphQL, Database Design , data analysis, building reusable react components.",
    },
    {
      title: "full Stack developer (Trainee) - RBK.",
      date: "Mar 2020 - Oct 2020",
      description: `ReBootKamp is the coding bootcamp of the Middle East. Based on the Hack Reactor curriculum with 
         5 months immersive boot camp for Software Engineering.`,
    },
  ],
  educations: [
    {
      title: "University Of Jordan - CIS",
      date: "Oct 2020 - Oct 2023",
      description: "bachelor's degree in computer information systems",
    },
    {
      title: "udemy",
      date: "Mar 2020 - present",
    },
    {
      title: "FreeCodeCamp",
      date: "Mar 2020 - present",
    },
  ],
  services: [
    {
      title: "Reusable Subsystems",
      img: reusableSubsystemsImg,
    },
    {
      title: "Reusable UI_Components",
      img: reusableUIImg,
    },
    {
      title: "Database Design",
      img: databaseDesignImg,
    },
    {
      title: "UX/UI Design",
      img: uXUIImg,
    },
    {
      title: "Data Analysis",
      img: dataAnalysisImg,
    },
    {
      title: "Project Management",
      img: projectManagementImg,
    },
  ],
  skills: [
    {
      title: "front-end",
      description: [
        "React JS",
        "ReactNative",
        "JavaScript",
        "Material UI",
        "CSS",
        "Bootstrap"
      ],
    },
    {
      title: "back-end",
      description: [
        "Node JS",
        "GraphQL"
      ],
    },
    {
      title: "database",
      description: [
        "MySQL",
        "SQL",
        "MongoDB",
      ],
    },
    {
      title: "source control",
      description: ["Git", "GitHub"],
    },
  ],
};
