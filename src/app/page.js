import PrimaryBtn from "./components/primaryBtn";
import Image from "next/image";
import Project from "./components/project";
import SecondaryBtn from "./components/secondaryBtn";

export default function home() {
  const featured_projects = [
    {
      projectTitle: "ANOKHA '24",
      projectDescription:
        "Collaborated with a 16 member team in developing a full-stack web app for students to register and participate for events with payment integrations in my college's Techfest Anokha 2024. Utilized NextJS, Tailwind CSS and GSAP to create a visually appealing and user-friendly frontend interface.",
      projectImage: "/anokha-24.png",
    },
    {
      projectTitle: "AI STUDY MATE",
      projectDescription:
        "AI StudyMate is an innovative learning app designed to enhance your learning experience through intelligent AI assistance. Learn smart, learn simple with our user-friendly platform that adapts to your pace.",
      projectImage: "/anokha-24.png",
    },
  ];

  return (
    <>
      <main className="h-screen">
        <div className="flex flex-col h-full justify-center items-center gap-12">
          <div className="flex flex-col justify-center items-center">
            <div className="text-hero">HEY THERE, I&apos;M</div>
            <div className="text-hero">THARUN.</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-subtitle text-secondary">
              A Student, Front-end developer providing{" "}
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
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                projectImage={project.projectImage}
              />
            ))}
            <SecondaryBtn text="VIEW ALL PROJECTS" />
          </div>
        </div>
      </main>
    </>
  );
}
