import Sidebar from '../components/Sidebar';
import Inprogress from '../components/Inprogress';

const Contact = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <h1 className="heading--4">Reach Out to Me</h1>

          <Inprogress />
        </section>
      </div>
    </>
  );
};

export default Contact;
