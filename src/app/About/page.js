"use client";

import Image from "next/image";
4;
import localFont from "next/font/local";
import PrimaryBtn from "../components/primaryBtn";
import PageHeader from "../components/pageHeader";
import CarouselDefault from "./components/Carousal";
import { IoReloadCircle } from "react-icons/io5";
import { useState, useEffect } from "react";
import Footer from "../components/footer";

const Komigo = localFont({
  src: "../../../public/fonts/Komigo3DRegular-rg1lK.ttf",
  variable: "--font-komigo",
});
const Code7x5 = localFont({
  src: "../../../public/fonts/Code7X5Regular-ypBe.ttf",
  variable: "--font-code7x5",
});

const randomQuotes = [
  "Life is a journey, not a destination",
  "Stay Hungry, Stay Foolish",
  "The only way to do great work is to love what you do",
  "The best way to predict the future is to create it",
  "The only limit to our realization of tomorrow will be our doubts of today",
  "The only thing that is constant is change",
  "The best way to find yourself is to lose yourself in the service of others",
  "The only thing we have to fear is fear itself",
  "The only thing necessary for the triumph of evil",
];

export default function About() {
  const [animate, setAnimate] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    if (animate) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const handleClick = () => {
    setAnimate(true);
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    setRandomQuote(randomQuotes[randomIndex]);
    console.log(randomQuote);
  };

  return (
    <>
      <PageHeader title="ABOUT ME" />
      <main className="my-16">
        <div className="flex flex-col h-full gap-8">
          <div className="flex flex-row mx-32 gap-16 my-8 ">
            <div className="rounded-2xl hover:scale-95 transition duration-300 ease-in-out w-80">
              <Image
                src="/tharun.JPG"
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
            </div>
          </div>
        </div>
      </main>
      <main className="">
        <div className="text-title flex justify-center items-center">
          SKILLS
        </div>
        <div className="flex justify-center items-center">
          <CarouselDefault />
        </div>
      </main>
      <main className="flex flex-row gap-64 px-32 my-16">
        <div className="flex flex-col text-focus font-normal">
          <div className="flex">
            I do{" "}
            <span className={`${Code7x5.className} mx-4 font-semibold`}>
              {" "}
              COOL
            </span>
          </div>
          <div className="flex">things</div>
          <div className="flex">
            beyond{" "}
            <span className={`${Code7x5.className} mx-4 font-semibold`}>
              WORK!
            </span>
          </div>
          <div className="my-8">
            <PrimaryBtn text="PLAY" />
          </div>
        </div>
        <div className="-mt-16">
          <Image src="/collage1.webp" alt="Play" height={640} width={400} />
        </div>
      </main>
      <main className="bg-primary flex flex-row p-8 mx-8 gap-16 rounded-xl text-background items-center">
        <div className="flex flex-col">
          <div className="flex flex-row text-focus items-center gap-4">
            <div className="text-focus">QUOTES </div>
            <div
              className={`${animate ? "animate-spin360" : ""}`}
              onClick={handleClick}
            >
              <IoReloadCircle />
            </div>
          </div>
          <div>I love quotes, so thought I would share some with you :)</div>
        </div>
        <div className="text-para text-justify my-4">
          {randomQuote
            ? `❛ ${randomQuote} ❜`
            : "❛ Click the reload icon ❜"}
        </div>
      </main>
      <Footer />
    </>
  );
}
