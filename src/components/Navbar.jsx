import { navigation } from '../constants';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { nerdLogo } from '../assets';

import { Context } from '../Contexts/Context';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [active, setActive] = useState('');
  const { active, setActive } = useContext(Context);

  return (
    <>
      <nav className="navbar">
        <div className="logo  w-[8.4rem] h-[3.6rem] block lg:hidden ">
          <img src={nerdLogo} alt="" className="w-full h-full object-cover" />
        </div>

        <ul className="navbar__links">
          {navigation.map((route) => (
            <li
              key={route.id}
              onClick={() => setActive(route.linkName)}
              className={`${
                active === route.linkName
                  ? ' bg-secondaryColor'
                  : ' item bg-textSecondary'
              } item shadow-lg`}
            >
              <Link to={route.link} onClick={() => setActive(route.linkName)}>
                <route.icon
                  className={`${
                    active === route.linkName ? 'text-textSecondary' : 'icon'
                  } icon drop-shadow-2xl`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex justify-center items-center p-2 h-12 w-12 cursor-pointer text-white">
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="h-16 w-16  animate__animated animate__fadeIn"
            />
          ) : (
            <HiMenuAlt3
              onClick={() => setToggle(!toggle)}
              className="h-16 w-16  animate__animated animate__fadeIn"
            />
          )}
        </div>
      </nav>

      <div
        className={`${
          !toggle ? 'hidden ' : 'mobile__nav'
        } animate__animated animate__fadeInLeft`}
      >
        {navigation.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            onClick={() => {
              setActive(item.linkName);
              setToggle(!toggle);
            }}
          >
            <div className="flex items-center gap-8">
              <item.icon />
              {item.linkName}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
