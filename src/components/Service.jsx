import React from 'react';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Service = ({ img, heading, info }) => {
  return (
    <>
      {/* <div className=""> */}
      <ScrollAnimation
        animateIn="animate__animated animate__zoomInUp"
        scrollableParentSelector="#root"
        className="service z-[999]"
      >
        <div className="service">
          <img src={img} alt="" className="service__img" />

          <div className="service__texts">
            <h3 className="heading--1 font-openSans mb-12">{heading}</h3>
            <p className="line-clamp-5">{info}</p>
          </div>
        </div>
      </ScrollAnimation>
      {/*</div> */}
    </>
  );
};

export default Service;
