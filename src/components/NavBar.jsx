import { NavLink } from "react-router";
import { AboutIcon, CartIcon, HomeIcon, OrchidIcon, SearchIcon } from "../icons";
import { AccountIcon } from "../icons/AccountIcon";


function NavBar() {

  const navigationLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="w-6 h-6 flex-shrink-0 fill-current" /> },
    { name: 'Orchids', path: '/orchids', icon: <OrchidIcon className="w-6 h-6 flex-shrink-0 fill-current" /> },
    { name: 'About', path: '/about', icon: <AboutIcon className="w-6 h-6 flex-shrink-0 fill-current" /> }
  ];

  return (
    
    <div className="fixed top-0 left-0 w-full z-50 bg-[#9FC87E]">

    <div className="flex items-center justify-between px-12 py-3">
      {/* Left - Logo */}
      <div className="flex-1/5 flex">
        <NavLink to="/" >
          <img className="w-10 h-10" src="/src/assets/logo.svg" alt="Logo" />
        </NavLink>
      </div>
      

      {/* Center - Navigation Links */}
      <div className="flex-3/5 flex justify-evenly">
        {
          navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={{ textDecoration: 'none' }}
              className={({ isActive }) => `px-4 pb-1 space-x-2 relative rounded-full ${isActive ? 'text-white bg-[#F8BBD0]' : 'text-black'}`}
            >
              <div className="flex items-center space-x-2">
                {link.icon}
                <span className="text-xl font-bold pt-1">{link.name}</span>
              </div>
            </NavLink>
          ))
        }
      </div>

      {/* Right */}
      <div className="flex-1/5 flex justify-end items-center space-x-6">
        <NavLink to="/search">
          <SearchIcon className="w-6 h-6 fill-current text-white" />
        </NavLink>

        <NavLink to="/cart">
          <CartIcon className="w-6 h-6 fill-current text-white" />
        </NavLink> 

        <NavLink to="/login" className={({ isActive }) => `pb-1 px-4 text-gray-800 rounded-full outline-offset-2 outline-[1px] outline-black ${isActive ? 'outline-none bg-[#F8BBD0] text-white' : ''}`}>
          <span className="text-md fill-current">Login</span>
        </NavLink>       
      </div>
    </div>
    </div>
  );
}

export default NavBar;
