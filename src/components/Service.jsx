const Service = ({ key, img, heading, info }) => {
  return (
    <>
      <div key={key} className="service">
        <div className="service__img">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="service__texts">
          <h3 className="heading--1 font-openSans mb-12">{heading}</h3>
          <p className="">{info}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
