import { Spin } from "antd";
import React from "react";

import "./style.css";

const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <Spin size="large" className="spin" />
    </div>
  );
};

export default React.memo(Loading);
