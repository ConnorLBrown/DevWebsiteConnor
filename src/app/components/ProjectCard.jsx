import React from "react";
import { ArrowUpRightIcon, } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group border-black border-2"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay border-black border-2 items-center justify-center absolute top-0 left-0 w-full h-full bg-transparent bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-slate-400 hover:border-black group/link"
          >
            <ArrowUpRightIcon className="bg-transparent h-10 w-10 text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-black/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-black rounded-b-xl  bg-white border-black border-2 py-6 px-4">
        <h5 className="text-xl font-semibold text-black mb-2 bg-white">{title}</h5>
        <p className="text-black bg-white">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

