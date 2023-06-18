import { useState } from "react";
import { RiCloseLine } from 'react-icons/ri'
import { NavLink } from "react-router-dom";

import { logo } from "../assets"
import { links } from "../assets/constants"

const NavLinks = ({handleClick}) => (
    <div className="mt-10">
        {links.map(link => <NavLink key={link.name} to={link.to} handleClick={e => handleClick && handleClick()} className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'>
                                <link.icon className="w-6 h-6 mr-2" />
                                {link.name}
                            </NavLink>)}
    </div>
)

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <>
          <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#453C67]">
                <img src={logo} alt='logo' className="object-contain w-full h-14" />

                {<NavLinks />}
          </div>
      </>
    )

}

export default Sidebar;
