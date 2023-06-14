"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

function Darkmodesqitch() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="cursor-pointer flex space-x-4 hover:text-red-600">
      {currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}

export default Darkmodesqitch;
