import React from "react";
import { BsEye } from "react-icons/bs";

const ProjectCard = ({ data, popUpData }) => {
  return (
    <>
      {data?.map((item, index) => (
        <div
          key={item.id}
          className="cursor-pointer card-hover-icon hover:before:opacity-100"
          onClick={() => popUpData(item)}
        >
          <span className="absolute top-0 left-0 text-green-500 text-3xl w-full h-full flex justify-center items-center opacity-0 card-icon-visibility transition duration-300">
            <BsEye />
          </span>
          <div className="w-full">
            <img
              src={item?.images?.default}
              alt={item?.title}
              className="object-cover rounded-md w-[310px] h-[310px]"
            />
          </div>
          <div className="w-full px-3 absolute bottom-0 card-overlay">
            <p className="text-white text-md font-semibold">{item?.title}</p>
            <p className="text-white text-xs">{item?.type}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
