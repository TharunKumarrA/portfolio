"use client";
import PrimaryBtn from "./components/primaryBtn";
import Image from "next/image";
import Link from "next/link";
import Project from "./components/project";
import SecondaryBtn from "./components/secondaryBtn";
import { useState } from "react";

import { VscGithubInverted } from "react-icons/vsc";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("tharunkumarra@gmail.com");
    setCopied(true);
  };

  const handleReset = () => {
    setCopied(false);
    setHovered(false);
  };

  const featured_projects = [
    {
      title: "ANOKHA '24",
      techStack: "NextJS | NodeJS | Tailwind CSS | GSAP | API",
      description:
        "Collaborated with a 16 member team in developing a full-stack web app for students to register and participate for events with payment integrations in my college's Techfest Anokha 2024.Created a visually appealing and user-friendly frontend interface.",
      image: "/anokha-24.png",
    },
    {
      title: "AI STUDY MATE",
      techStack: "Vue | NodeJS | Google Bard API",
      description:
        "AI StudyMate is an innovative learning app designed to enhance your learning experience through intelligent AI assistance. Learn smart, learn simple with our user-friendly platform that adapts to your pace.",
      image: "/AI-Study-Mate.webp",
    },
  ];

  return (
    <>
      <NavBar/>
      <main className="h-screen ">
        <div className="flex flex-col h-full justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center">
            <div className="text-hero">HEY THERE, I&apos;M</div>
            <div className="text-hero">THARUN.</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-subtitle text-secondary">
              A Student, Full-stack developer providing{" "}
            </div>
            <div className="text-subtitle text-secondary">
              innovative solutions
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <PrimaryBtn text="DOWNLOAD CV" />
          </div>
        </div>
        <div className="absolute -bottom-64 right-0 -z-10">
          <Image src="/Orbit.svg" alt="Orbit" width={640} height={640}></Image>
        </div>
      </main>
      <main className="min-h-screen">
        <div className="flex flex-col h-full gap-8">
          <div className="flex items-center justify-center text-heading mt-8">
            FEATURED PROJECTS
          </div>
          <div className="flex flex-col gap-8 min-h-5/6 mx-8 px-16 py-8 bg-primary rounded-2xl">
            {featured_projects.map((project, index) => (
              <Project
                key={index}
                projectTitle={project.title}
                projectTechStack={project.techStack}
                projectDescription={project.description}
                projectImage={project.image}
              />
            ))}
            <SecondaryBtn text="VIEW ALL PROJECTS" />
          </div>
        </div>
      </main>
      <main className="h-screen">
        <div className="flex flex-col h-full gap-8">
          <div className="flex items-center justify-center text-heading mt-16">
            ABOUT ME
          </div>
          <div className="flex flex-row mx-32 gap-16 my-8 ">
            <div className="rounded-2xl hover:scale-95 transition duration-300 ease-in-out w-80">
              <Image
                src="/DSC_0197.JPG"
                alt="Profile Picture"
                width={300}
                height={600}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col flex-grow w-8/12 gap-8">
              <div className="text-focus font-extrabold">
                THARUN <span className="text-secondary">KUMARR A</span>
              </div>
              <div className="text-para text-justify mb-8">
                I&apos;m a 2nd year Computer Science Undergrad from Amrita
                University, Coimbatore. I&apos;m based from Chennai. Currently a
                full-stack web developer, where I&apos;m exploring various
                technologies and frameworks. I am speacialized with UI/UX design
                and user experience. Alongside, I&apos;m also learning
                Artificial Intelligence and Machine Learning. Aspiring to be a
                Data Scientist. I thrive on challenges and am committed to
                continuous learning, eagerly embracing the ever-evolving
                landscape of technology to make a tangible impact in the
                industry.
              </div>
              <PrimaryBtn text="ABOUT ME" />
            </div>
          </div>
        </div>
      </main>
      <main className="">
        <div className="flex flex-col h-full gap-8">
          <div className="flex items-center justify-center text-heading mt-8">
            CONTACT
          </div>
          <div className="flex flex-col gap-8 min-h-5/6 mx-8 px-16 py-8 bg-primary text-background rounded-2xl">
            <div className="flex flex-row gap-64 mb-16">
              <div className="flex flex-col gap-8 justify-center items-center">
                <div className="text-para">
                  {copied
                    ? "Copied !"
                    : hovered
                    ? "Click to Copy"
                    : "Let's Connect ✨"}
                </div>
                <div
                  className="border-2 border-dotted py-8 px-16 text-heading rounded-xl cursor-pointer"
                  onClick={handleCopy}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  tharunkumarra@gmail.com
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-para mb-12">SOCIALS</div>
                <div className="flex flex-row gap-16 justify-between">
                  <Link
                    href="https://github.com/TharunKumarrA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VscGithubInverted className="text-focus hover:scale-110 cursor-pointer transition duration-200 ease-in-out" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/tharun-kumarr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiLinkedinBoxFill className="text-focus hover:scale-110 cursor-pointer transition duration-200 ease-in-out" />
                  </Link>
                  <Link
                    href="https://twitter.com/astro_tharun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="text-focus hover:scale-110 cursor-pointer transition duration-200 ease-in-out" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/astro_tharun100/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-focus hover:scale-110 cursor-pointer transition duration-200 ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
