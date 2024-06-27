"use client";
import { Carousel } from "@material-tailwind/react";
import Card from "./card";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiEclipseide } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { TbLetterC } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { BsRegex } from "react-icons/bs";

const skillSet = [
  {
    TitleLine1: "WEB",
    TitleLine2: "DEVELOPMENT",
    Desc: "Experienced web developer proficient in front-end and back-end technologies, delivering high-quality, responsive websites and web applications.",
    imgURL: "/web_dev.svg",
    Icons: [
      {
        icon: <FaHtml5 className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <FaCss3Alt className="skill-icon" />,
        iconDesc: "CSS 3",
      },
      {
        icon: <IoLogoJavascript className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <FaVuejs className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <FaReact className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiNextdotjs className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiExpress className="skill-icon" />,
        iconDesc: "Express JS",
      },
      {
        icon: <IoLogoNodejs className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiFlask className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiMysql className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <BiLogoPostgresql className="skill-icon" />,
        iconDesc: "Postgres SQL",
      },
      {
        icon: <SiSqlite className="skill-icon" />,
        iconDesc: "Sqlite3",
      },
      {
        icon: <SiTailwindcss className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <FaBootstrap className="skill-icon" />,
        iconDesc: "HTML 5",
      },
    ],
  },
  {
    TitleLine1: "DEVELOPMENT",
    TitleLine2: "TOOLS",
    Desc: "Utilizing development tools to streamline coding, debug efficiently, and enhance project workflow for smoother software development processes.",
    imgURL: "/tools.svg",
    Icons: [
      {
        icon: <FaGitAlt className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <FaGithub className="skill-icon" />,
        iconDesc: "CSS 3",
      },
      {
        icon: <FaFigma className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiPostman className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiVisualstudiocode className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiVisualstudio className="skill-icon" />,
        iconDesc: "HTML 5",
      },
      {
        icon: <SiEclipseide className="skill-icon" />,
        iconDesc: "Eclipse",
      },
      {
        icon: <SiBlender className="skill-icon" />,
        iconDesc: "Blender",
      },
    ],
  },
  {
    TitleLine1: "LANGUAGES &",
    TitleLine2: "FRAMEWORKS",
    Desc: "Exploring, coding, and problem-solving across various programming languages to develop efficient and innovative solutions.",
    imgURL: "/prog.svg",
    Icons: [
      {
        icon: <FaPython className="skill-icon" />,
        iconDesc: "Python",
      },
      {
        icon: <TbBrandCpp className="skill-icon" />,
        iconDesc: "C++",
      },
      {
        icon: <TbLetterC className="skill-icon" />,
        iconDesc: "C language",
      },
      {
        icon: <FaJava className="skill-icon" />,
        iconDesc: "Java",
      },
      {
        icon: <RiJavascriptFill className="skill-icon" />,
        iconDesc: "Javascript",
      },
      {
        icon: <BiLogoTypescript className="skill-icon" />,
        iconDesc: "Typescript",
      },
      {
        icon: <SiGnubash className="skill-icon" />,
        iconDesc: "Bash scripting",
      },
      {
        icon: <FaDatabase className="skill-icon" />,
        iconDesc: "Structured Query Language",
      },
      {
        icon: <BsRegex className="skill-icon" />,
        iconDesc: "regular expression",
      },
    ],
  },
];

export default function CarouselDefault() {
  return (
    <Carousel className="rounded-xl w-11/12 m-8 text-background">
      {skillSet.map((skill, index) => (
        <Card
          key={index}
          titleline1={skill.TitleLine1}
          titleline2={skill.TitleLine2}
          description={skill.Desc}
          iconsJSON={skill.Icons}
        />
      ))}
    </Carousel>
  );
}
