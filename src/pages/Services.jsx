import Sidebar from '../components/Sidebar';
import { services } from '../constants';
import Service from '../components/Service';

const Services = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className=" section__header">
            <h1 className="heading--4 font-montserrat ">What I Do</h1>

            <h2 className=" font-bold uppercase opacity-20 tracking-widest font-montserrat absolute text-[4.8rem] md:text-[10rem] -z-10 py-20 lg:py-16">
              Services
            </h2>
          </div>

          <div className="mt-12 w-full  md:w-[80%]  mx-auto">
            {services.map((item) => (
              <Service
                key={item.id}
                img={item.img}
                heading={item.service}
                info={item.info}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
