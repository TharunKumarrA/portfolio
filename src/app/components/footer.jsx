"use client";
import { useState } from "react";
import Link from "next/link";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setHovered(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex flex-row mt-24 gap-32 mx-8">
      <div className="flex flex-col">
        <div className="text-focus">© 2024</div>
        <div className="text-hero">THARUN.</div>
      </div>
      <div className="flex flex-row gap-16 justify-center items-center">
        <Link href="">
          <div className="text-link hover:underline underline-offset-4 transition duration-200">
            HOME
          </div>
        </Link>
        <Link href="">
          <div className="text-link hover:underline underline-offset-4 transition duration-200">
            ABOUT
          </div>
        </Link>
        <Link href="">
          <div className="text-link hover:underline underline-offset-4 transition duration-200">
            WORK
          </div>
        </Link>
        <Link href="">
          <div className="text-link hover:underline underline-offset-4 transition duration-200">
            PLAY
          </div>
        </Link>
        <Link href="">
          <div className="text-link hover:underline underline-offset-4 transition duration-200">
            BLOG
          </div>
        </Link>
        <div
          className="text-focus ml-8 cursor-pointer transition duration-200 ease-in-out"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClick}
        >
          {hovered ? <BsArrowUpCircleFill /> : <BsArrowUpCircle />}
        </div>
      </div>
    </footer>
  );
}
