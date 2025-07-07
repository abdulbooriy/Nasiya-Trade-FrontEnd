import { Input } from "antd";
import React, { useEffect, useState, type FC } from "react";
import { useSearchParams } from "react-router-dom";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}

const Nav: FC<Props> = ({ setShow, show }) => {
  const [params, setParams] = useSearchParams();
  const name = params.get("name");
  const [inputSearch, setInputSearch] = useState(name || "");

  useEffect(() => {
    let time = setTimeout(() => {
      if (inputSearch === "") params.delete("name");
      else params.set("name", inputSearch);
      setParams(params);
    }, 500);

    return () => clearTimeout(time);
  }, [inputSearch]);

  useEffect(() => {
    if (name === "") setParams({});
  }, []);

  return (
    <div className="w-full h-14 bg-white sticky top-0 left-0 flex items-center px-4 z-10 border-b border-gray-200 gap-5">
      <button
        onClick={() => setShow((p) => !p)}
        className="text-3xl cursor-pointer">
        {show ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
      </button>
      <div>
        <Input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          style={{
            width: "500px",
            height: "35px",
            fontSize: "16px",
            borderColor: "gray",
          }}
          placeholder="Qidirish..."
        />
      </div>
    </div>
  );
};

export default React.memo(Nav);
