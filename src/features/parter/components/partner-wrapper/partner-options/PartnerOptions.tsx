import { usePartner } from "@/features/parter/service/usePartner";
import { Dropdown, type MenuProps } from "antd";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const PartnerOptions = ({ item }: { item: any }) => {
  const { updatePartner } = usePartner();

  const handleArchive = () =>
    updatePartner.mutate({ id: item.id, body: { isArchive: !item.isArchive } });

  const handlePin = () => {
    updatePartner.mutate({ id: item.id, body: { pin: !item.pin } });
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <span className=" block" onClick={handlePin}>
          {item.pin ? "Qadoqdanchiqarish" : "Qadoqlash"}
        </span>
      ),
      key: "0",
    },
    {
      label: (
        <span className=" block" onClick={handleArchive}>
          {item.isArchive ? "Arxivdanchiqarish" : "Arxivlash"}
        </span>
      ),
      key: "1",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <FiMoreVertical className="cursor-pointer" size={25} color="#000" />
    </Dropdown>
  );
};

export default React.memo(PartnerOptions);
