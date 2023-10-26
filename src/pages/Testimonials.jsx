import Sidebar from '../components/Sidebar';

const Testimonials = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className=" section__header">
            <h1 className="heading--4">What people say about Me</h1>

            <h2 className="font-bold uppercase opacity-20 tracking-widest font-clashDisplay absolute text-[4.8rem] md:text-[10rem] -z-10 py-20 lg:py-16">
              Testimonials
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
