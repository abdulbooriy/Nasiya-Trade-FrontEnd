import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";

const Partner = ({ role }: { role: string }) => {
  return (
    <Box>
      <Title className={"mb-4"}>
        {role === "customer" ? "Mijozlar" : "Sotuvchilar"} ro'yhati
      </Title>
    </Box>
  );
};

export default React.memo(Partner);
