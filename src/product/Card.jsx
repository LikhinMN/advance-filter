import Data from "../../db/data";
import React from 'react';
import './style.css'
const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {Data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
        >
          <div className="h-48 flex items-center justify-center bg-white">
            <img
              src={item.img}
              alt={item.title}
              className="object-contain h-full"
            />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <p className="font-semibold text-lg text brand-dark">{item.title}</p>
            <span className="flex items-center gap-1 text-yellow-500">
              {item.star}
              <span className="brand-dark-light text-sm">{item.reviews}</span>
            </span>
            <span className="flex items-center gap-2">
              <del className="text-gray-400">{item.prevPrice}</del>
              <span className="brand-dark-light font-bold">${item.newPrice}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;