import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { usePartner } from "../service/usePartner";
import { useParams } from "react-router-dom";
import { Skeleton, Tag } from "antd";

const DetialPartner = () => {
  const { id } = useParams();
  const { getPartner } = usePartner();
  const { data, isPending } = getPartner(id || "");

  console.log(data);

  const isActive = data?.isActive && !data?.isArchive;

  return isPending ? (
    <Box>
      <Skeleton active />
    </Box>
  ) : (
    <Box>
      <div className="flex items-center justify-between">
        <div>
          <Title>{data?.fullName}</Title>
          <p className="my-3 text-gray-500">{data?.address}</p>
          <Tag
            style={{ fontWeight: "bold" }}
            color={
              isActive
                ? "green-inverse"
                : data?.isArchive
                ? "gold-inverse"
                : "red-inverse"
            }>
            {isActive ? "Active" : data?.isArchive ? "Arxiv" : "O'chirilgan"}
          </Tag>
        </div>
        <div>
          <h2 className="text-xl font-medium">{data?.balance?.fprice()}</h2>
          <p>Asosiy telefon raqami: </p>
          <h3>{data?.phones[0]}</h3>
          <p>Ikkinchi telefon raqami: </p>
          <h3>{data?.phones[1]}</h3>
        </div>
      </div>
    </Box>
  );
};

export default React.memo(DetialPartner);
