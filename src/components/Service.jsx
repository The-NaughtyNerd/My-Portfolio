const Service = ({ img, heading, info }) => {
  return (
    <>
      <div className="service">
        <img src={img} alt="" className="service__img" loading="lazy" />

        <div className="service__texts">
          <h3 className="heading--1 font-openSans mb-12">{heading}</h3>
          <p className="line-clamp-5">{info}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
