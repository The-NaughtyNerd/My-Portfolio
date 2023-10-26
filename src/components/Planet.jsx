import { useState } from 'react';
import { Planet } from 'react-planet';

import {
  vscodeLogo,
  reactjsLogo,
  javascriptLogo,
  tailwindLogo,
  sassLogo,
} from '../assets';

const MyPlanet = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="orbit ">
        <div
          className="planet cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <div className="animate__animated animate__pulse animate__infinite ">
            <h1 className="uppercase text-center font-bold">Frontend Senpai</h1>
          </div>
        </div>

        <div
          className={`${
            !toggle ? 'hidden' : 'moon'
          } animate__animated animate__fadeIn moon-1`}
        >
          <img src={javascriptLogo} alt="" className=" object-cover" />
        </div>
        <div
          className={`${
            !toggle ? 'hidden' : 'moon'
          } animate__animated animate__fadeIn moon-2`}
        >
          <img src={tailwindLogo} alt="" className=" object-cover" />
        </div>
        <div
          className={`${
            !toggle ? 'hidden' : 'moon'
          } animate__animated animate__fadeIn moon-3`}
        >
          <img src={reactjsLogo} alt="" className=" object-cover" />
        </div>
        <div
          className={`${
            !toggle ? 'hidden' : 'moon'
          } animate__animated animate__fadeIn moon-4`}
        >
          <img src={sassLogo} alt="" className=" object-cover" />
        </div>
      </div>
    </>
  );
};

export default MyPlanet;
