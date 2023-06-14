import Link from "next/link";
import Menueitem from "./Menueitem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Darkmodesqitch from "./Darkmodesqitch";

function Header({ title, icon, address }) {
  return (
    <div className="flex justify-between mx-2 max-w-6xl items-center sm:mx-auto py-6">
      <div className="flex gap-3 mx-4">
        <Menueitem title="HOME" address="/" Icon={AiFillHome} />
        <Menueitem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <Darkmodesqitch />
        <Link href="/">
          <h2 className=" text-2xl">
            <span className=" font-bold bg-amber-500 py-1 px-2 rounded lg:rounded-lg mr-1">
              MOVIE
            </span>
            <span className="text-xl hidden sm:inline">App</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
