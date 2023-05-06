import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";
import { useState } from "react";

const defaultIconSize = "1.875rem";

const items = [
  {
    label: "Home",
    icon: <BiHomeAlt size={defaultIconSize} />,
    active: true,
  },
  {
    label: "Moves",
    icon: <BiMoviePlay size={defaultIconSize} />,
    active: false,
  },
  {
    label: "About",
    icon: <BiInfoCircle size={defaultIconSize} />,
    active: false,
  },
];

const NavItemsContainer = () => (
  <>
    {items.map((item, index) => (
      <NavItem item={item} key={index} />
    ))}
  </>
);

const Index = () => {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="flex mx-4 justify-between items-center md:block">
        <h4 className="font-bold uppercase text-primary py-4 border-b border-primary text-right">
          Phimmoi.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden"
          size={defaultIconSize}
          onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
        />
      </div>
      <ul
        className={`mx-4 my-2 ${isNavMenuMobileOpen ? "" : " hidden"} md:block`}
      >
        <NavItemsContainer />
      </ul>
    </nav>
  );
};

export default Index;
