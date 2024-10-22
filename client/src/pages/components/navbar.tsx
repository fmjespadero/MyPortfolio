import { NavLink } from "react-router-dom";
import { navlinks } from "../../constants/data";
export const Navbar = () => {
  return (
    <nav className="text-[#B0B3B8]">
      <ul className="flex">
        {navlinks.map(({ label, link }, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#0965FB] border-b-[3px] border-b-[#0965FB]"
                    : "hover:bg-white/20 rounded-md"
                } p-3 flex capitalize`
              }
              to={link}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
