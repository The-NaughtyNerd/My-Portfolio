import Sidebar from '../components/Sidebar';
// import Inprogress from '../components/Inprogress';
import { services } from '../constants';
import Service from '../components/Service';
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className=" section__header">
            <h1 className="heading--4 ">What I Do</h1>

            <h2 className=" font-bold uppercase opacity-20 tracking-widest font-clashDisplay absolute text-[4.8rem] md:text-[10rem] -z-10 py-20 lg:py-16">
              Services
            </h2>
          </div>

          <div className="mt-12 w-full  md:w-[80%]  mx-auto">
            {/* <ScrollAnimation
              animateIn="animate__animated animate__fadeInUp"
              // className="z-50"
              // initiallyVisible={true}
            > */}
            {services.map((item) => (
              // <div key={item.id} className="">
              <Service
                key={item.id}
                img={item.img}
                heading={item.service}
                info={item.info}
              />
              // </div>
            ))}
            {/* </ScrollAnimation> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
