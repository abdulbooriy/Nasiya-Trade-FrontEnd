import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { useLocation } from "react-router-dom";

const DetialPartner = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Box>
      <Title>Detail page</Title>
    </Box>
  );
};

export default React.memo(DetialPartner);
