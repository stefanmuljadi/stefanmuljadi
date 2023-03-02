import Link from "next/link";
import { saveAs } from "file-saver";

const Navbar = ({dest, setDest}) => {
  const saveFile = () => {
    saveAs(
      "CV_Stefan Rafael Muljadi.pdf",
      "CV_Stefan Rafael Muljadi.pdf"
    );
  };
  return (
    <div className="bg-transparent px-72 py-6 w-full text-primary">
        <nav className="flex flex-row justify-between items-center w-full">
            {/* Logo */}
            <div>

            </div>
            {/* Nav */}
            <div className="w-1/2 flex flex-row items-center justify-center gap-12 font-semibold">
              <button onClick={() => setDest("Home")}>Home</button>
              {/* <button onClick={() => setDest("Skills")}>Skills</button> */}
              <button onClick={() => setDest("Experience")} className="">Experiences</button>
              {/* <button onClick={() => setDest("Awards")}>Awards</button> */}
              <button className="bg-primary text-black rounded-xl px-2 py-1 transition ease-in-out hover:scale-110 duration-300" onClick={saveFile}>Resume</button>

            </div>

        </nav>
    </div>
  );
};

export default Navbar;