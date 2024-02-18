import React, { useState } from 'react';
import { close, logo, menu } from '../assets/index';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(nav => {
          const isLastNavItem = nav === navLinks[navLinks.length - 1];
          return (
            <li
              key={nav.id} // Assuming nav has a unique id property
              className={`font-poppins font-normal cursor-pointer text-[16px] ${isLastNavItem ? 'mr-0' : 'mr-10'} text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close: menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={()=>setToggle((prev)=>!prev)} />
      </div>
    </nav>
  );
};

export default Navbar;
