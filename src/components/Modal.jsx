import { AiOutlineClose } from 'react-icons/ai';
import { FaFileAlt, FaCode, FaUser, FaExternalLinkAlt } from 'react-icons/fa';
import { auricle } from '../assets';

const Modal = ({ project, purpose, tools, preview, screenshot, toggling }) => {
  return (
    <>
      <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none justify-center items-center transform transition-all duration-150 ease-out scale-0 scale-100 z-[100]">
        <div className="relative w-auto my-6 mx-auto max-w-full md:max-w-4xl z-[60] h-max">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondaryColor outline-none focus:outline-none ">
            <div className="p-6 text-[2.6rem] flex items-center justify-between">
              <h3 className="font-semibold font-clashDisplay">{project}</h3>
              <button
                className="outline-none focus:outline-none"
                onClick={toggling}
              >
                <AiOutlineClose className="" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-x-2 gap-y-12 lg:gap-x-10 text-[1.4rem]">
                <div className="">
                  <p className="flex flex-wrap gap-1.5 items-center">
                    <FaFileAlt /> Project :{' '}
                    <span className="font-semibold">{project}</span>
                  </p>
                </div>
                <div className="">
                  <p className="flex flex-wrap gap-1.5 items-center">
                    <FaUser /> Purpose :{' '}
                    <span className="font-semibold">{purpose}</span>
                  </p>
                </div>
                <div className="">
                  <p className="flex flex-wrap gap-1.5 items-center">
                    <FaCode /> Tools :{' '}
                    <span className="font-semibold">{tools}</span>
                  </p>
                </div>
                <div className="">
                  <p className="flex flex-wrap gap-1.5 items-center">
                    <FaExternalLinkAlt /> Preview :{' '}
                    <span className="font-semibold">{preview}</span>
                  </p>
                </div>
                <div className="col-span-full">
                  <img src={screenshot} alt={project} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="backdrop-blur-sm bg-[hsla(0,0%,100%,.25)] fixed z-40 w-full h-full top-0 left-0"></div> */}
        <div
          onClick={toggling}
          className="backdrop-blur-sm bg-[rgba(0,0,0,.6)]  z-40 fixed w-full h-full top-0 left-0"
        ></div>
      </div>
    </>
  );
};

export default Modal;
