import React from "react";

function NavBar() {
  return (
    <div className="flex h-16 justify-center items-center m-4">
      <nav className="flex flex-row justify-center items-center w-1/3 h-full rounded-full border-2 border-r-primary bg-white bg-opacity-60 backdrop-blur-lg">
        <a href="/" className="text-para font-medium">
          Home
        </a>
        <a href="/Work" className="text-para font-medium ml-16">
          Work
        </a>
        <a href="/About" className="text-para font-medium ml-16">
          About
        </a>
        <a href="/Play" className="text-para font-medium ml-16">
          Play
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
