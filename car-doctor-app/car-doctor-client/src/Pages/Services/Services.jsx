import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        setServices(data)
    })
    // .then(data=>setServices(data))
  }, []);
  console.log(services)
  return (
    <div>
      <div className="mx-auto text-center mb-5 ">
        <div className="space-y-3">
          <h4 className="text-xl text-orange-600 font-bold">Service</h4>
          <h3 className="text-3xl font-bold">Our Service Area</h3>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br></br> words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {
            services.map(service=>
                <ServiceCard key={service._id} service={service}></ServiceCard>
            )
        }
      </div>
    </div>
  );
};

export default Services;
