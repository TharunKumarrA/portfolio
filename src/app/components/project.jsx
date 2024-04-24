import Image from "next/image";
import SecondaryBtn from "./secondaryBtn";
import { LuArrowUpRight } from "react-icons/lu";


export default function Project({
  projectTitle,
  projectDescription,
  projectImage,
  projectLink,
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-1 bg-primary text-background rounded-2xl">
      <div className="rounded-xl border-4 border-background mr-32 mb-8">
        <Image
          src={projectImage}
          alt="Project Image"
          width={540}
          height={480}
          
          className="rounded-xl"
        ></Image>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-heading">{projectTitle}</div>
        <div className="text-para">{projectDescription}</div>
        <div className="relative flex text-link my-4 cursor-pointer w-fit before:content-[''] before:transition before:duration-200 before:ease-in-out before:origin-left before:absolute before:h-[2px] before:w-full before:bg-background before:-bottom-2 before:scale-x-0 hover:before:scale-x-100">
          VIEW PROJECT <LuArrowUpRight className="text-subtitle"/>
        </div>
      </div>
    </div>
  );
}
