import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  console.log(price);
  return (
    <div className="card bg-base-100 w-96 shadow-xl mb-3">
      <figure
      //   className="h-100 w-96 p-5 rounded-3xl"
      >
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          src={img}
          alt="Shoes"
          className="h-80 w-96 p-5 rounded-3xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="card-actions justify-end">
          <p className="font-bold text-orange-600">Price: $ {price}</p>
          {/* <button className="btn btn-primary">Buy Now</button> */}
          <button className="font-bold text-orange-600 text-3xl">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
