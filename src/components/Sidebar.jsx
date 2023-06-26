import { useState } from "react";
import { RiCloseLine } from 'react-icons/ri'
import { NavLink } from "react-router-dom";

import { logo } from "../assets"
import { imgLogo } from "../assets"
import { links } from "../assets/constants"
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({handleClick}) => (
    <div className="mt-10">
        {links.map(link => <NavLink key={link.name} to={link.to} className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'>
                                <div handleClick={e => handleClick && handleClick()} >
                                    <link.icon className="w-6 h-6 mr-2" />
                                    {link.name}
                                </div>
                            </NavLink>)}
    </div>
)

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <>
          <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#393E46]">
                <img src={imgLogo} alt='logo' className=" w-40 h-40" />

                {<NavLinks />}
          </div>

          <div className="absolute md:hidden block top-3 right-3">
                {mobileMenuOpen ? <RiCloseLine className="w-6 h-6 text-white mr-2 mt-4" onClick={e => setMobileMenuOpen(false)} /> 
                                : <HiOutlineMenu className="w-6 h-6 text-white mr-2 mt-4" onClick={e => setMobileMenuOpen(true)} />}
          </div>
          <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#393E46] backdrop-blur-lg z-10 p-6 smooth-transition ${mobileMenuOpen ? 'left-0': '-left-full'}`}>
                <img src={imgLogo} alt='logo' className="object-contain w-full h-14" />

                {<NavLinks handleClick={e => setMobileMenuOpen(false)} />}
          </div>
      </>
    )

}

export default Sidebar;
