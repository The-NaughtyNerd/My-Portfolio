import Sidebar from '../components/Sidebar';
import Inprogress from '../components/Inprogress';

const Blog = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className=" section__header">
            <h1 className="heading--4 ">What I Talk About</h1>

            <h2 className=" font-bold uppercase opacity-20 tracking-widest font-clashDisplay absolute text-[7.2rem] lg:text-[10rem] -z-10 py-20 lg:py-16">
              Blog
            </h2>
          </div>

          <Inprogress />
        </section>
      </div>
    </>
  );
};

export default Blog;
