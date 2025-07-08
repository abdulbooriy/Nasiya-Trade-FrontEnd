import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { usePartner } from "../service/usePartner";
import Navigation from "../components/navigation/Navigation";
import { useParamsHook } from "@/shared/hooks/useParamsHook";
import { Badge } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import type { IParams } from "@/shared/types";

const Partner = ({ role }: { role: string }) => {
  const { getPartners } = usePartner();
  const { getParam } = useParamsHook();
  const page = getParam("page") || "1";
  const { pathname } = useLocation();
  const typeName = pathname.split("/")[2] || "active";

  const query: IParams = {
    role,
    page,
    order: "desc",
    isArchive: false,
    isActive: "true",
  };

  if (typeName === "archive") {
    query.isArchive = true;
  }
  if (typeName === "disabled") {
    query.isActive = "false";
  }

  const { data, isFetching } = getPartners(query);

  return (
    <Box>
      <Badge count={data?.total} style={{ backgroundColor: "#000" }}>
        <Title className={"py-1"}>
          {role === "CUSTOMER" ? "Mijozlar" : "Sotuvchilar"} ro'yxati
        </Title>
      </Badge>
      <Navigation role={role} />
      <Outlet context={{ data, isFetching }} />
    </Box>
  );
};

export default React.memo(Partner);
