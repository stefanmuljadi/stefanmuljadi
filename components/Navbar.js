import Link from "next/link";
import { saveAs } from "file-saver";
import { useState } from "react";
const Navbar = ({ dest, setDest }) => {
  const saveFile = () => {
    saveAs(
      "CV_Stefan Rafael Muljadi.pdf",
      "CV_Stefan Rafael Muljadi.pdf"
    );
  };
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
    {/* desktop */}
      <div className="hidden lg:block bg-transparent lg:px-72 py-6 w-full text-primary">
        <nav className="flex flex-row items-center justify-center w-3/4">
          {/* Nav */}
          <div className="lg:w-1/2 flex flex-row items-center justify-center gap-12 font-semibold">
            <button onClick={() => setDest("Home")}>Home</button>
            <button onClick={() => setDest("Experience")} className="">Experiences</button>
            <button onClick={() => setDest("Education")} className="">Education</button>
            <button className="bg-primary text-black rounded-xl px-2 py-1 transition ease-in-out hover:scale-110 duration-300" onClick={saveFile}>Resume</button>

          </div>

        </nav>
      </div>
      {/* Mobile */}
      <div className="flex lg:hidden w-full text-primary flex-col shadow-md">
        <div className="bg-black h-16 w-full flex flex-row items-center justify-between px-8">
          <div>
            <button
              preset="primary"
              className="flex flex-row"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`${menuOpen ? "h-0 opacity-0" : "opacity-100 py-4"
            }
           transition-height ease-in-out duration-500 px-8 bg-black`}
        >
          <nav className="flex flex-col gap-8">
            <button onClick={() => {
              setDest("Home")
              setMenuOpen(true)}}>Home</button>
              <button onClick={() => {
                setDest("Experience");
                setMenuOpen(true)
                }} className="">Experiences</button>
              <button onClick={() => {
                setDest("Education")
                setMenuOpen(true)}} className="">Education</button>
            <button className="bg-primary text-black rounded-xl px-2 py-1 transition ease-in-out hover:scale-110 duration-300" onClick={saveFile}>Resume</button>
          </nav>

        </div>
      </div>
    </>
  );
};

export default Navbar;