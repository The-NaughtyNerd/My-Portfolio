import Sidebar from '../components/Sidebar';
import Inprogress from '../components/Inprogress';

const Blog = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <h1 className="heading--4">My Blog</h1>

          <Inprogress />
        </section>
      </div>
    </>
  );
};

export default Blog;
