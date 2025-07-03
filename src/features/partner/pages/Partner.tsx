import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { usePartner } from "../service/usePartner";
import PartnerWrapper from "../components/partner-wrapper/PartnerWrapper";
import { useParamsHook } from "@/shared/hooks/useParamsHook";

const Partner = ({ role }: { role: string }) => {
  const { getPartners } = usePartner();
  const { getParam } = useParamsHook();
  const page = getParam("page") || "1";

  const { data, isPending } = getPartners({ role, page });

  return (
    <Box>
      <Title className={"mb-4"}>
        {role === "customer" ? "Mijozlar" : "Sotuvchilar"} ro'yhati
      </Title>
      <PartnerWrapper data={data} loading={isPending} />
    </Box>
  );
};

export default React.memo(Partner);
