import React from "react";
import NavBar from "../components/navbar";
import Project from "../components/project";
import PageHeader from "../components/pageHeader";
import PrimaryBtn from "../components/primaryBtn";
import Card from "./components/Card";
import Footer from "../components/footer";

const projects = [
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
  {
    title: "Molecule Visualizer",
    techStack: "ReactJS | NodeJS | Material UI | Tailwind CSS | Plotly JS",
    description:
      "Molecule Visualizer is an innovative application for representing and manipulating chemical molecules in 3D space using graph data structures. It features real-time updates, bond angle calculations, and molecular geometry analysis along with cycle detection",
    image: "/molecule-visualizer.png",
  },
  {
    title: "E-Library Management System",
    techStack: "Flask | Jinja | SQLite | Bootstrap CSS | REST APIs",
    description:
      "A comprehensive system enabling users to request and read e-books, with admin features for managing book operations and tracking borrowed books. Users can explore the library, request book access, and maintain a personalized profile with an intuitive design for easy navigation.",
    image: "/library-management-system.jpeg",
  },
  {
    title: "FC-TeamForge",
    techStack: "Vue | NodeJS | JS",
    description:
      "FC-TeamForge simplifies creating balanced football teams from a pool of real-life players. Features include a dynamic player database, smart team generator, formation flexibility, and substitute management. The user-friendly web app ensures seamless, fair, and enjoyable team formation.",
    image: "/fc-teamforge.jpg",
  },
  {
    title: "Union Budget Explorer",
    techStack: "Vue.js | Node.js | Postgres SQL |",
    description:
      "Union Budget Explorer is a project that offers a detailed visualization of India's financial landscape for the fiscal year 2023-24. Key features include budget overviews, non-tax revenue analysis, expenditure breakdowns, and scheme showcases, all presented through engaging graphs and tables.",
    image: "/union-budget-explorer.jpeg",
  },
];

const certificates = [
  {
    image: "/QC.png",
    title: "Quantum Computing Fundamentals",
    description: "Certificate of participation",
  },
  {
    image: "/IITM.png",
    title: "IITM Foundation",
    description: "Certificate of Completion",
  },
  {
    image: "/WebDev.png",
    title: "Introduction to Web Development",
    description: "Certificate of Completion",
  },
];

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <main>
        <PageHeader title="WORK" />
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 min-h-5/6 mx-8 px-16 py-8 bg-primary rounded-2xl my-8"
          >
            <Project
              projectTitle={project.title}
              projectTechStack={project.techStack}
              projectDescription={project.description}
              projectImage={project.image}
            />
          </div>
        ))}
      </main>
      <div className="flex flex-col justify-center items-center mb-20">
        <PrimaryBtn text="DOWNLOAD CV" />
      </div>
      <main>
        <div className="flex justify-center items-center text-subtitle mb-4">
          CERTIFICATES
        </div>
        <div className="flex flex-row gap-8 justify-center items-center">
          {certificates.map((certificate, index) => (
            <Card
              key={index}
              certificateImage={certificate.image}
              certificateTitle={certificate.title}
              certificateDescription={certificate.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
