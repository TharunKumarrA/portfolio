import Image from "next/image";
import SecondaryBtn from "./secondaryBtn";
import { LuArrowUpRight } from "react-icons/lu";

export default function Project({
  projectTitle,
  projectDescription,
  projectImage,
  projectTechStack,
  projectLink,
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-1 bg-primary text-background rounded-2xl overflow-hidden">
      <div
        className="relative rounded-xl border-4 border-background mr-32 mb-8"
        style={{ width: "600px", height: "320px" }}
      >
        <Image
          src={projectImage}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4 p-8">
        <div className="text-heading">{projectTitle}</div>
        <div className="text-para font-extralight">{projectTechStack}</div>
        <div className="text-para">{projectDescription}</div>
        <div className="relative flex text-link my-4 cursor-pointer items-center">
          VIEW PROJECT <LuArrowUpRight className="text-subtitle ml-2" />
        </div>
      </div>
    </div>
  );
}
