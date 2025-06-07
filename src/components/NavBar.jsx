import { NavLink } from "react-router";
import {
  AboutIcon,
  CartIcon,
  HomeIcon,
  OrchidIcon
} from "../icons";


function NavBar() {
  const navigationLinks = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon className="w-6 h-6 flex-shrink-0 fill-current" />,
    },
    {
      name: "Orchids",
      path: "/orchids",
      icon: <OrchidIcon className="w-6 h-6 flex-shrink-0 fill-current" />,
    },
    {
      name: "About",
      path: "/about",
      icon: <AboutIcon className="w-6 h-6 flex-shrink-0 fill-current" />,
    },
  ];


  return (
    <div className="">
      <div className="flex items-center justify-between px-12 py-3">
        {/* Left - Logo */}
        <div className="flex-1/5 flex">
          <NavLink to="/">
            <img
              className="w-10 h-10"
              src="/src/assets/logo-golden.svg"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex-3/5 flex justify-evenly">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                              `px-4 pb-1 space-x-2 relative rounded-full ${
                                isActive ? "text-[#18230F] bg-[#ffd700]" : "text-white"
                              }`
                            }
            >
              <div className="flex items-center space-x-2">
                {link.icon}
                <span className="text-xl font-bold pt-1">{link.name}</span>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Right */}
        <div className="flex-1/5 flex justify-end items-center space-x-6">

          <NavLink to="/cart">
            <CartIcon className="w-6 h-6 fill-current text-white" />
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `pb-1 px-4 rounded-full ${
                isActive
                  ? "bg-[#ffd700] text-[#18230F]"
                  : "outline-offset-2 outline-[1px] outline-white text-white"
              }`
            }
          >
            <span className="text-md fill-current">Login</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar; 