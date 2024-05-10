import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const SkillsCard = ({ title, skills }) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ backgroundColor: "white", backgroundSize: "cover" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl text-black font-bold mb-2">{title}</h5>
        <p className="text-[#000000]">{skills}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
