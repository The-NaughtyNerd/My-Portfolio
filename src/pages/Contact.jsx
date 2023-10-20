import Sidebar from '../components/Sidebar';
import Inprogress from '../components/Inprogress';

const Contact = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className=" section__header">
            <h1 className="heading--4 ">Get in touch</h1>

            <h2 className="font-bold uppercase opacity-20 tracking-widest font-clashDisplay absolute text-[4.8rem] md:text-[10rem] -z-10 py-20 lg:py-16">
              {/* <h1 className="text-7xl lg:text-9xl text-white font-bold opacity-10 tracking-widest py-20 lg:py-16 font-openSans absolute text-[10rem] -z-50"> */}
              Contact
            </h2>
          </div>

          <Inprogress />
        </section>
      </div>
    </>
  );
};

export default Contact;
