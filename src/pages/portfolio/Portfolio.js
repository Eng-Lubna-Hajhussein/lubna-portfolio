import {
  Grid,
  Typography,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Avatar,
} from "@basetoolkit/ui";
import { Link } from "react-router-dom";
import Header from "components/sharedUI/header/Header";
import rmsImg from "assets/RMS.png";
import adaptiveOnlineExamImg from "assets/adaptiveOnlineExam.png";
import reactUI1 from "assets/react_ui_1.png";
import reactUI2 from "assets/react_ui_2.png";
import healersImg from "assets/healers.png";
import basetoolkitDocsImg from "assets/basetoolkit_docs.png";
import basetoolkitNpmImg from "assets/basetoolkitNpm.png";
import basetoolkitLogo from "assets/basetoolkitLogo.svg";
import basetoolkitTemplates from "assets/templates.png";
import basetoolkitTemplates1 from "assets/multiStepForm.png";
import basetoolkitTemplates2 from "assets/adminDashboard.png";
import basetoolkitTemplates3 from "assets/1inch.png";
import npmLogo from "assets/npmLogo.svg";
import addressSubsystemImg from "assets/address_subsystem.png";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <Box style={{ padding: "30px 30px 60px 30px" }}>
      <Grid container style={{ marginTop: "10px" }}>
        <Header title="portfolio" />
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <Grid container spacing={3} rowSpacing={3}>
            <Grid item xs={12} md={6}>
              <ProjectCard
                date={"Dec 2022 - Present"}
                logo={
                  <Avatar
                    bgcolor="white"
                    boxShadow={3}
                    sx={{ p: "5px" }}
                    variant="rounded"
                    aria-label="recipe"
                    src={npmLogo}
                  />
                }
                img={basetoolkitNpmImg}
                title={"@basetoolkit/ui Library"}
                description={`
BaseToolkit is a comprehensive React UI library designed to simplify the development of high-performance, responsive user interfaces. Inspired by popular libraries like Material-UI, Moment, Chroma, Clsx, and use-form-hook, BaseToolkit offers unique logic, dynamic styling, CSS-in-JS functionality, and a powerful form API.
                  `}
                view={"https://www.npmjs.com/package/@basetoolkit/ui"}
                srcCode={null}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                date={"Dec 2022 - Present"}
                logo={
                  <Avatar
                    bgcolor="white"
                    boxShadow={3}
                    sx={{ p: "5px" }}
                    variant="rounded"
                    aria-label="recipe"
                    src={basetoolkitLogo}
                  />
                }
                img={basetoolkitDocsImg}
                title={"@basetoolkit/ui Library Docs"}
                description={`
This documentation is your ultimate resource for mastering BaseToolkit's components, hooks, and tools. Whether you're crafting a simple application or designing a complex, scalable system, it provides in-depth examples, clear usage instructions, and actionable best practices to help you leverage the full power of the library and streamline your development process.
                  `}
                view={"https://main.d3f6h88o1tiy2o.amplifyapp.com"}
                srcCode={
                  "https://github.com/Eng-Lubna-Hajhussein/Basetoolkit-Docs"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                subtitle={"@basetoolkit/ui Free Templates"}
                logo={
                  <Avatar
                    bgcolor="white"
                    boxShadow={3}
                    sx={{ p: "5px" }}
                    variant="rounded"
                    aria-label="recipe"
                    src={basetoolkitLogo}
                  />
                }
                img={basetoolkitTemplates1}
                title={"Multi-Step Form"}
                description={`
A dynamic multi-step form template that guides users through various steps of a form. Ideal for registration flows, checkout processes, or data collection. This template leverages BaseToolkit's powerful form API to manage validation, state, and seamless transitions between steps.
                  `}
                view={
                  "https://main.d3f6h88o1tiy2o.amplifyapp.com/basetoolkit-templates-multi-step-form"
                }
                srcCode={
                  "https://github.com/Eng-Lubna-Hajhussein/multi-step-form"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                subtitle={"@basetoolkit/ui Free Templates"}
                logo={
                  <Avatar
                    bgcolor="white"
                    boxShadow={3}
                    sx={{ p: "5px" }}
                    variant="rounded"
                    aria-label="recipe"
                    src={basetoolkitLogo}
                  />
                }
                img={basetoolkitTemplates}
                title={"Admin Dashboard"}
                description={`
A comprehensive admin dashboard template with a wide range of components, perfect for managing data and analytics for web applications.
                  `}
                view={
                  "https://main.d3f6h88o1tiy2o.amplifyapp.com/basetoolkit-templates-multi-step-form"
                }
                srcCode={
                  "https://github.com/Eng-Lubna-Hajhussein/multi-step-form"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                subtitle={"@basetoolkit/ui Free Templates"}
                logo={
                  <Avatar
                    bgcolor="white"
                    boxShadow={3}
                    sx={{ p: "5px" }}
                    variant="rounded"
                    aria-label="recipe"
                    src={basetoolkitLogo}
                  />
                }
                img={basetoolkitTemplates3}
                title={"1inch Clone"}
                description={`
A responsive template inspired by the popular 1inch cryptocurrency exchange aggregator. Perfect for creating a decentralized exchange or finance app interface. The layout is fully responsive, adapting seamlessly across desktop, tablet, and mobile devices for an optimal user experience.
                  `}
                view={
                  "https://main.d3f6h88o1tiy2o.amplifyapp.com/basetoolkit-templates-multi-step-form"
                }
                srcCode={
                  "https://github.com/Eng-Lubna-Hajhussein/multi-step-form"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                date={"Jan 2024 - Present"}
                logo={
                  <Avatar
                    bgcolor="white"
                    color="#f3274c"
                    variant="rounded"
                    aria-label="recipe"
                    boxShadow={3}
                    fontSize={20}
                    sx={{ p: "5px", fontWeight: 800 }}
                  >
                    R
                  </Avatar>
                }
                img={rmsImg}
                title={"Restaurant Management System"}
                description={`
                a service-based platform empowering restaurants to efficiently manage their operations while offering full control over website design customization to reflect their unique brand identity. Developed using my BaseToolkit library, the platform delivers seamless functionality, dynamic responsiveness, and a highly personalized user experience, enabling restaurants to enhance their digital presence effortlessly.
                `}
                view={"https://youtu.be/SLO_CSWkFaA?si=2qFtUqGEwDQ8ZYHk"}
                srcCode={"https://github.com/Eng-Lubna-Hajhussein/RMS"}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                date={"Jan - Aug, 2023"}
                logo={
                  <Avatar
                    bgcolor="white"
                    color="#7BCCA2"
                    variant="rounded"
                    aria-label="recipe"
                    boxShadow={3}
                    fontSize={20}
                    sx={{ p: "5px", fontWeight: 800 }}
                  >
                    A
                  </Avatar>
                }
                img={adaptiveOnlineExamImg}
                title={"Adaptive Online Exam"}
                description={`
                  This is my university graduation project that I built with my team, We worked on a comprehensive platform that enables educational systems to upload exams and manage their own question banks. The questions are systematically sorted according to various standards, skills, and grade levels based on the educational frameworks of different countries. Refactored to use my BaseToolkit library, the platform offers a customizable and efficient solution for educators to organize and access exam materials tailored to their specific curricular requirements.
                  `}
                view={"https://youtu.be/kCaT7wNWaqM?si=KpiK3F6rQI963r6E"}
                srcCode={
                  "https://github.com/Eng-Lubna-Hajhussein/AdaptiveOnlineExam"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                date={"Sep - Oct, 2020"}
                logo={
                  <Avatar
                    bgcolor="white"
                    color="#3a52b0"
                    variant="rounded"
                    aria-label="recipe"
                    boxShadow={3}
                    fontSize={20}
                    sx={{ p: "5px", fontWeight: 800 }}
                  >
                    H
                  </Avatar>
                }
                img={healersImg}
                title={"Healers"}
                description={`

This is my RBK graduation project that I built with my team, we developed a full-stack web application designed to connect post-operative patients with potential donors. The platform facilitates seamless communication, enabling patients to find donors efficiently while providing a user-friendly interface for both parties. By leveraging modern web technologies, the app ensures secure data handling, responsive design, and an intuitive experience, addressing a critical need in the healthcare domain.
                  `}
                view={"https://youtu.be/BnGMy-5x2Yw?si=RXQsLy3LwuihL3hI"}
                srcCode={"https://github.com/Lubna-Hajhussein/Healers"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
