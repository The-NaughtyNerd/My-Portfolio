import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import '../sass/main.scss';
// import  from 'react-visibility-sensor'
import ProgressProvider from '../ProgressProvider/ProgressProvider';
import { useState } from 'react';

const Skill = ({ logo, rate, name }) => {
  const [value, setValue] = useState(rate);

  return (
    <>
      <div className="w-[65%]  mx-auto text-center  text-secondaryColor ">
        <ProgressProvider valueStart={0} valueEnd={value}>
          {(value) => (
            <CircularProgressbarWithChildren
              value={value}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: '#ee9322',
                textColor: '#ee9322',
                trailColor: '#ffe998',
                pathTransitionDuration: 0.5,
              })}
            >
              <img src={logo} alt="" className="w-[50%]" />

              <p className="font-medium text-[2rem]">{name}</p>
              <p className="font-semibold text-[1.8rem]">
                {value}
                <small>%</small>
              </p>
            </CircularProgressbarWithChildren>
          )}
        </ProgressProvider>
        {/* <CircularProgressbarWithChildren
          value={rate}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: '#ee9322',
            textColor: '#ee9322',
            trailColor: '#ffe998',
            pathTransitionDuration: 0.5,
          })}
        >
          <img src={logo} alt="" className="w-[50%]" />

          <p className="font-medium text-[2rem]">{name}</p>
          <p className="font-semibold text-[1.8rem]">
            {rate}
            <small>%</small>
          </p>
        </CircularProgressbarWithChildren> */}
      </div>
    </>
  );
};
// const Skill = ({ logo, rate, name }) => {
//   return (
//     <>
//       <div className="flex justify-center items-center h-full w-full relative">
//         <div className="w-[45%]">
//           <img
//             src={logo}
//             alt=""
//             className="w-full h-full object-cover grayscale"
//           />
//         </div>

//         <div className="absolute bottom-0 right-0 lg:right-10 w-[3.6rem] lg:w-[8rem]">
//           {/* <CircularProgressbar
//             value={rate}
//             text={`${rate}%`}
//             styles={buildStyles({
//               strokeLinecap: 'butt',
//               pathColor: '#ee9322',
//               textColor: '#0c0e16',
//             })}
//           /> */}
//           <CircularProgressbarWithChildren
//             value={rate}
//             styles={buildStyles({
//               strokeLinecap: 'butt',
//               pathColor: '#ee9322',
//               textColor: '#0c0e16',
//               trailColor: '#ffe998',
//             })}
//           >
//             <div className="font-bold text-center text-sm lg:text-base">
//               <p className="">{name}</p>
//               <p className="">{rate}%</p>
//             </div>
//           </CircularProgressbarWithChildren>
//         </div>
//       </div>
//     </>
//   );
// };

export default Skill;
