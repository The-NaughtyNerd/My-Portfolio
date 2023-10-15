import Sidebar from '../components/Sidebar';
import 'animate.css';
import Inprogress from '../components/Inprogress';

const Projects = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <h1 className="heading--4">My Projects</h1>

          <Inprogress />
        </section>
      </div>
    </>
  );
};

export default Projects;
