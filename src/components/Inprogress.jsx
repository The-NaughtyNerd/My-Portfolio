import { ongoing } from '../assets';

const Inprogress = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn animate__delay-3s w-full h-full flex justify-center items-center">
        <img src={ongoing} alt="" className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default Inprogress;
