import { usePartner } from "@/features/parter/service/usePartner";
import type { IParams } from "@/shared/types";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useEffect, useState, type FC } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}

const Nav: FC<Props> = ({ setShow, show }) => {
  const [params, setParams] = useSearchParams();
  const name = params.get("name");
  const [inputSearch, setInputSearch] = useState(name || "");
  const { getPartners } = usePartner();

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

  const query: IParams = {
    search: encodeURIComponent(inputSearch),
  };

  const { data: parnterSearch } = getPartners(query);

  console.log(parnterSearch);

  return (
    <div className="w-full h-14 bg-white sticky top-0 left-0 flex items-center px-4 z-10 border-b border-gray-200 gap-10">
      <button
        onClick={() => setShow((p) => !p)}
        className="text-xl cursor-pointer">
        {show ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
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
          placeholder="search..."
        />
      </div>
    </div>
  );
};

export default React.memo(Nav);
