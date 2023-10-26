import { nerdLogo, illustration2, specsLogo } from '../assets';
import { navigation } from '../constants';
import { Link } from 'react-router-dom';
import 'animate.css';
import { useContext } from 'react';
import { Context } from '../Contexts/Context';

const Sidebar = () => {
  const { active, setActive } = useContext(Context);

  return (
    <>
      <header className="lg:block hidden animate__animated animate__fadeInLeft animate__delay-1s  h-screen bg-secondaryColor w-[15%] fixed">
        <div className="h-[25%] bg-primaryColor flex items-center justify-center">
          <img src={nerdLogo} alt="" className=" w-full h-full object-cover " />
        </div>
        <ul className="flex flex-col items-center justify-center gap-8 text-[2.4rem] h-[70%]">
          {navigation.map((route) => (
            <li
              key={route.id}
              // className="font-clashDisplay font-medium"
              className={`${
                active === route.linkName
                  ? ' text-textSecondary'
                  : ' text-textPrimary'
              } font-clashDisplay font-medium`}
              onClick={() => setActive(route.linkName)}
            >
              <Link to={route.link}>{route.linkName}</Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Sidebar;
