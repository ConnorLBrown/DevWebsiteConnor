import React from "react";

const SkillsTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-primary-400 bg-white"
    : "text-black border-black hover:border-primary-400";
  return (
    <button
      className={`${buttonStyles} bg-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-text-n-1`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default SkillsTag;