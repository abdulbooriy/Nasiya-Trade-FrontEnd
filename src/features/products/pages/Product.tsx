import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import { Badge } from "antd";
import React from "react";

const Product = () => {
  return (
    <Box>
      <Badge count={"1"} style={{ backgroundColor: "#000" }}>
        <Title className={"py-1"}>Mahsulotlar ro'yxati</Title>
      </Badge>
    </Box>
  );
};

export default React.memo(Product);
