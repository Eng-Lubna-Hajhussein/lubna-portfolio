import codewarsLogo from "assets/logo.f607a0fb.svg";
import githubIcon from "assets/githubIcon.svg";
import linkedinIcon from "assets/linkedIn.svg";
import npmIcon from "assets/npmLogo.svg";
import reusableSubsystemsImg from "assets/reusable_subsystems.png";
import reusableUIImg from "assets/reusable_ui.png";
import uXUIImg from "assets/UX_UI.png";
import dataAnalysisImg from "assets/data-analysis.png";
import projectManagementImg from "assets/project-management.png";
import basetoolkitLogoImg from "assets/basetoolkitLogo.svg";
import { Box } from "@basetoolkit/ui";

export default {
  name: "Lubna Hajhussein",
  job: "Frontend ReactJS Developer",
  email: "hajhussein.lubna@gmail.com",
  phone: "+962 786912147",
  socials: {
    Npm: {
      link: "https://www.npmjs.com/package/@basetoolkit/ui",
      text: "Lubna-Hajhussein",
      img: (
        <Box
          component={"img"}
          src={npmIcon}
          height={20}
          borderRadius={1}
          width={20}
        />
      ),
    },
    Basetoolkit: {
      link: "https://main.d3f6h88o1tiy2o.amplifyapp.com/",
      text: "Lubna-Hajhussein",
      img: (
        <Box
          component={"img"}
          src={basetoolkitLogoImg}
          height={25}
          width={25}
        />
      ),
    },

    Github: {
      link: "https://github.com/Eng-Lubna-Hajhussein",
      text: "Eng-Lubna-Hajhussein",
      img: <Box component={"img"} src={githubIcon} height={22} width={22} />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/lubna-hajhussein-6968721b4",
      text: "lubna-hajhussein",
      img: (
        <Box
          component={"img"}
          src={linkedinIcon}
          height={23}
          width={23}
          borderRadius={1}
        />
      ),
    },
    Codewar: {
      link: "https://www.codewars.com/users/Lubna-Hajhussein",
      text: "Lubna-Hajhussein",
      img: <Box component={"img"} src={codewarsLogo} height={22} width={22} />,
    },
  },
  about: (
    <div>
      <p>
        I am a Front-End Developer with a passion for building seamless,
        user-centric interfaces and a strong commitment to improving the
        efficiency and scalability of UI development.
        <br />
        Over the past two years, I have been dedicated to creating{" "}
        <strong>BaseToolkit</strong>, a comprehensive React library designed to
        address the evolving needs of modern front-end development.
        <br />
        BaseToolkit provides developers with an all-in-one solution, offering
        over 135 customizable UI components, advanced styling tools, and
        essential utilities to streamline application development and enhance
        productivity.
      </p>
      <p>
        As the creator of BaseToolkit, I have focused on combining flexibility
        with performance.
        <br />
        Inspired by libraries like Material-UI and Emotion, BaseToolkit includes
        features like the <code>sx</code> prop for dynamic and responsive
        styling, the <code>useCSSClass</code> hook for CSS-in-JS, and a CSS
        injection HOC for effortless theming and customization.
        <br />
        Other tools include a <code>keyframes</code> function for animations, a{" "}
        <code>classnames</code> utility for managing conditional styles, and
        APIs for form handling, color manipulation, and date formatting.
      </p>
      <p>
        Beyond BaseToolkit, I bring expertise in crafting scalable
        architectures, building reusable components, and creating responsive
        designs that adapt seamlessly across devices.
        <br />
        My work involves tackling complex UI challenges, such as state
        management, advanced animations, and performance optimization, with a
        focus on delivering maintainable, clean code.
      </p>
      <p>
        With two years of focused effort on BaseToolkit and a broader career in
        front-end development, I aim to empower developers to build high-quality
        applications with speed and efficiency.
        <br />I remain committed to innovation, continually enhancing the tools
        and solutions that make UI development more accessible and intuitive for
        teams around the globe.
      </p>
    </div>
  ),
  experiences: [
    {
      title: "@basetoolkit/ui Library Developer",
      date: "Desc 2022 - Present",
      description:
        "Modern front-end development demands powerful, flexible tools that simplify styling, handle complex forms, manage dates, and support a consistent design language. BaseToolkit is a comprehensive React library that offers these capabilities and more. Inspired by popular tools like Material-UI, Emotion, Moment, Chroma, and use-form-hook, BaseToolkit combines advanced CSS-in-JS styling, a dynamic form API, a date utility with datewise, color manipulation with coloris, and unique ID management. With BaseToolkit, developers can focus on building high-quality, responsive applications—without external CSS files or added complexity.",
    },
    {
      title: "frontend ReactJS developer - Eqra Tech.",
      date: "May 2024 - Oct 2024",
      description:
        "At Eqra Tech, I worked as a Front-End React.js Developer on a project for the Jordan Maritime Authority, delivering a responsive platform for 30 maritime services. I focused on building high-performance interfaces, integrating APIs for seamless data interactions, and ensuring code quality through reviews. My contributions prioritized performance and user experience, creating an efficient system aligned with the Authority’s objectives.",
    },
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
      title: "Scalable UI Libraries",
      img: basetoolkitLogoImg,
    },
    {
      title: "Advanced Component Systems",
      img: reusableUIImg,
    },
    {
      title: "Performance-Driven Applications",
      img: reusableSubsystemsImg,
    },
    {
      title: "Responsive Design Systems",
      img: uXUIImg,
    },
    {
      title: "Interactive User Experiences",
      img: dataAnalysisImg,
    },
    {
      title: "Performance-Driven Optimization",
      img: projectManagementImg,
    },
  ],
  skills: [
    {
      title: "front-end",
      description: [
        "React JS",
        "React Native",
        "CSS & SASS",
        "Basetoolkit",
        "CSS In JS",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      title: "back-end",
      description: ["Node JS", "GraphQL"],
    },
    {
      title: "database",
      description: ["MySQL", "SQL", "MongoDB"],
    },
    {
      title: "source control",
      description: ["Git", "GitHub"],
    },
  ],
};
