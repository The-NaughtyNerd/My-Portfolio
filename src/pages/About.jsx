import Sidebar from '../components/Sidebar';
import { services } from '../constants';
import Service from '../components/Service';

const About = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className="mb-12">
            <h1 className="heading--4">About Me</h1>
            <h2 className="">I'm David Ade, Frontend Developer</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reprehenderit tempore eligendi dolorem quas in
              possimus, facere eos itaque quod pariatur voluptatum aspernatur
              debitis atque odio vero nulla, veniam rem!
            </p>
          </div>

          <div className="space-y-8">
            <div className="heading--3">What I Do?</div>

            {services.map((item) => (
              <Service
                key={item.key}
                img={item.img}
                heading={item.service}
                info={item.info}
              />
              // <div key={item.id} className="service">
              //   <div className="w-1/2 service__img">
              //     <img src={item.img} alt="" className="" />
              //   </div>
              //   <div className="service__texts">
              //     <h3 className="[">{item.service}</h3>
              //     <p className="">{item.info}</p>
              //   </div>
              // </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
