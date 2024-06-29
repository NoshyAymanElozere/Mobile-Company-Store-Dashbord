import { useState } from "react";
import { sideMenuLinks } from "../../hooks/constants";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthProvider";
type sideparProps = {
  IsSidebarOpen: boolean;
};

const Sidebar = ({ IsSidebarOpen }: sideparProps) => {
  const [open, setOpen] = useState(true);
  const { user } = useAuth();

  return (
    <div className={`${IsSidebarOpen ? "hidden " : ""}`}>
      <div
        className={` ${
          open ? "sm:w-72" : " sm:w-20 "
        } bg-dark-purple h-screen p-5  pt-8 dark:bg-[#1a103d] dark:text-white duration-500 absolute   sm:relative sm:left-0 border  w-60 z-[55]
        ${IsSidebarOpen ? " left-[-290px] " : "left-0 "}
        `}
      >
        <img
          src="./src/assets/control.png"
          className={`hidden sm:flex  absolute  cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {user.name}
          </h1>
        </div>
        <ul className="pt-6">
          {sideMenuLinks.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <Link
                to={`/${Menu.link}`}
                className={`${!open && "hidden"} origin-left duration-200`}
              >
                {Menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
