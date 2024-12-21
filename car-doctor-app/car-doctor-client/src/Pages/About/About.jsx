import React from "react";
import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="hero mt-4 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            className="rounded-lg shadow-2xl -mt-20 w-2/3 h-80 w-4/5"
            src={person}
          />
          <img
            className="rounded-lg shadow-2xl absolute w-1/2 top-1/2 left-1/3 ml-10 border-8 border-white"
            src={parts}
          />
        </div>
        <div className="w-1/2 space-y-5">
          <h5 className="text-3xl text-orange-600">About Us</h5>
          <h1 className="text-5xl font-bold">We are qualified <br></br> & of experience <br></br> in this field</h1>
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-warning text-sm px-4 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
