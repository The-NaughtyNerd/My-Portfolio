import Sidebar from '../components/Sidebar';
import Skill from '../components/Skill';
import { skills } from '../constants';

const About = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Sidebar />
        <section className="section">
          <div className=" section__header">
            <h1 className="heading--4">About Me</h1>

            <h2 className="font-bold uppercase opacity-20 tracking-widest font-clashDisplay absolute text-[4.8rem] md:text-[10rem] -z-10 py-20 lg:py-16">
              {/* <h1 className="text-7xl lg:text-9xl text-white font-bold opacity-10 tracking-widest lg:py-16 font-openSans absolute text-[10rem] -z-50"> */}
              Resume
            </h2>
          </div>

          <div className="mb-12 ">
            <h2 className="">I'm David Ade, Frontend Developer</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reprehenderit tempore eligendi dolorem quas in
              possimus, facere eos itaque quod pariatur voluptatum aspernatur
              debitis atque odio vero nulla, veniam rem!
            </p>
          </div>

          <div className="">
            <h3 className="heading--3">Skills</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 ">
              {skills.map((skill) => (
                <Skill
                  key={skill.id}
                  logo={skill.img}
                  rate={skill.accuracy}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
