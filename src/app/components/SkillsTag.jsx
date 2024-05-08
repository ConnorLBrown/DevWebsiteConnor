import React from "react";

const SkillsTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-400 bg-gradient-to-r from-blue-500 to-pink-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-text-n-1`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default SkillsTag;