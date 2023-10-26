import Sidebar from '../components/Sidebar';
import 'animate.css';
import Inprogress from '../components/Inprogress';
import { projects } from '../constants';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFileAlt, FaCode, FaUser, FaExternalLinkAlt } from 'react-icons/fa';
import { auricle } from '../assets';
import Modal from '../components/Modal';

const Projects = () => {
  const [project, setProject] = useState([]);
  const [toggle, setToggle] = useState(false);
  // console.log(project);

  return (
    <>
      <div className=" animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className=" section__header">
            <h1 className="heading--4 ">My Projects</h1>

            <h2 className="font-bold uppercase opacity-20 tracking-widest font-clashDisplay absolute text-[4.8rem] md:text-[10rem] -z-10 py-20 lg:py-16">
              Works
            </h2>
          </div>

          {/* <div className="grid grid-cols-12 gap-y-6 lg:gap-10 px-4 lg:px-36">
            {projects.map((project) => (
              <div
                key={project.id}
                className="col-span-12 lg:col-span-4 bg-red-100 relative rounded-lg cursor-pointer"
                onClick={() => {
                  setProject(project);
                  setToggle(!toggle);
                }}
              >
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="rounded-lg object-cover"
                />
                <h5 className="bg absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold rounded-lg">
                  {project.title}
                </h5>
              </div>
            ))}
          </div> */}

          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative rounded-lg cursor-pointer"
                onClick={() => {
                  setProject(project);
                  setToggle(!toggle);
                }}
              >
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="rounded-lg object-cover"
                />
                <h5 className="text-center text-2xl">{project.title}</h5>
              </div>
            ))}
          </div>

          {
            <div className={`${!toggle ? 'hidden' : 'block fixed z-[200]'}`}>
              <Modal
                project={project.title}
                purpose={project.purpose}
                tools={project.tools}
                preview={project.preview}
                screenshot={project.screenshot}
                toggling={() => setToggle(false)}
              />
            </div>
          }

          {/* <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center transform transition-all duration-150 ease-out scale-0 scale-100`}
          >
            <div
              key={project.id}
              className="relative w-auto my-6 mx-auto max-w-full lg:max-w-2xl"
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#252424] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span className="bg-transparent text-white opacity-100 h-6 w-6 text-4xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <div className="grid grid-cols-12 gap-x-2 lg:gap-x-10 text-white text-sm lg:text-md">
                    <div className="col-span-6">
                      <p className="my-2 leading-relaxed">some info</p>
                    </div>
                    <div className="col-span-6">
                      <p className="my-2 leading-relaxed">some info</p>
                    </div>
                    <div className="col-span-6">
                      <p className="my-2 leading-relaxed">some info</p>
                    </div>
                    <div className="col-span-6">
                      <p className="my-2 leading-relaxed">some info</p>
                    </div>
                    <div className="col-span-12 pt-10">
                      <img src={project.screenshot} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
          </div> */}
          {/* <Inprogress /> */}
        </section>
      </div>
    </>
  );
};

export default Projects;
