import React from "react";
import { useHistory } from "react-router";

export const ButtonBack: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <button
      className="md:w-[200px] h-10 flex justify-center items-center rounded-full ml-4 mt-4  bg-pink-600/85 px-4 z-10"
      onClick={handleClick}
    >
      <span className="md:text-xl text-xs font-semibold  text-white">
        <img src="/public/arrow-left.svg" alt="arrow" />
      </span>
    </button>
  );
};
