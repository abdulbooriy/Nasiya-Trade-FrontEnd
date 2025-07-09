import React, { type FC } from "react";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import Search from "./Search";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}

const Nav: FC<Props> = ({ setShow, show }) => {
  return (
    <div className="w-full h-14 bg-white sticky top-0 left-0 flex items-center px-4 z-10 border-b border-gray-200 gap-5">
      <button
        onClick={() => setShow((p) => !p)}
        className="text-3xl cursor-pointer">
        {show ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
      </button>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default React.memo(Nav);
