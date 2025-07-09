import { Dropdown } from "antd";
import React from "react";
import { TfiMoreAlt } from "react-icons/tfi";

const Options = ({ items }: { items: any }) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <TfiMoreAlt className="cursor-pointer" size={25} color="#000" />
    </Dropdown>
  );
};

export default React.memo(Options);