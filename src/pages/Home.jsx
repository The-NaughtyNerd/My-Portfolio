import {
  illustration1,
  illustrationBg,
  codeBg,
  codeWorld,
  vscodeLogo,
  reactjsLogo,
  javascriptLogo,
  tailwindLogo,
  sassLogo,
  sphere,
  vortex,
  sphere2,
} from '../assets';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import MyPlanet from '../components/Planet';

const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:h-screen pt-[2.8rem] lg:pt-0 ">
        <div className="w-full lg:w-[40%] px-8 lg:pl-[5.2rem] animate__animated animate__fadeInLeft">
          <div className="flex flex-col gap-4 py-12">
            <div className="heading--2">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  strings: ['Holla!', 'Hello!', 'Bonjour!', 'Hi!'],
                }}
              />
            </div>
            <h1 className="heading--3 ">I am David</h1>
            <p className="heading--1 uppercase ">
              Frontend developer / Writer
              {/* <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  strings: [
                    'Frontend Developer',
                    'Freelancer',
                    'Web Designer',
                    'Writer',
                  ],
                }}
              /> */}
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              repudiandae mollitia perferendis, iure dolorum nihil adipisci
              tempore dolor tenetur quam qui natus esse unde expedita minima
              consequatur fuga provident ex.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="btn btn-type--1">More About Me</button>
              <button className="btn btn-type--2">Download Resume</button>
            </div>
          </div>
        </div>

        <div className="w-full h-[75vh] lg:h-full lg:w-[60%] animate__animated animate__fadeInRight relative">
          {/* <div className="absolute"> */}
          <MyPlanet />
          {/* </div> */}
          <img
            src={illustrationBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* <div className="w-full h-[75vh] lg:h-full lg:w-[60%] animate__animated animate__fadeInRight relative">
          <img
            src={illustrationBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="bg-primaryColor border border-solid border-secondaryColor rounded-full p-2 absolute w-[6rem] h-[6rem] top-[40%] left-[5%] -z-40">
            <img
              src={javascriptLogo}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-primaryColor border border-solid border-secondaryColor rounded-full p-2 absolute w-[6rem] h-[6rem] top-[40%] left-[18%] -z-40">
            <img
              src={vscodeLogo}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-primaryColor border border-solid border-secondaryColor rounded-full p-2 absolute w-[6rem] h-[6rem] top-[40%] left-[30%] -z-40">
            <img
              src={reactjsLogo}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-primaryColor border border-solid border-secondaryColor rounded-full p-2 absolute w-[6rem] h-[6rem] top-[20%] left-[18%] -z-40">
            <img src={sassLogo} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-primaryColor border border-solid border-secondaryColor rounded-full p-2 absolute w-[6rem] h-[6rem] top-[60%] left-[18%] -z-40 ">
            <img
              src={tailwindLogo}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full h-full top-0 -z-50 opacity-50">
            <img src={sphere2} alt="" className="w-full h-full object-cover" />
          </div>
        </div> */}

        {/* <div className="absolute text-[5.2rem] text-[#ffe998] right-[2.5%] bottom-10  animate-bounce">
          <HiOutlineArrowNarrowDown />
        </div> */}
      </div>
    </>
  );
};

export default Home;
