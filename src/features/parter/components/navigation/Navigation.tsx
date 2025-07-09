import { Button } from "antd";
import React, { useCallback, useState } from "react";
import PartnerPopup from "../partner-popup/PartnerPopup";
import { NavLink } from "react-router-dom";
import useGetRole from "@/shared/hooks/useGetRole";
import { Role } from "@/shared/const";
import "./style.css";

const Navigation = ({ role: user_role }: { role: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const role = useGetRole();

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  return (
    <>
      <div className="mb-3.5 flex justify-between">
        <div className="flex gap-4">
          <NavLink
            end={true}
            className={"navigation-link  py-0.5 text-gray-500 relative"}
            to={role === Role.customer ? "/" : ""}>
            Faol bo'lganlar
          </NavLink>
          <NavLink
            className={"navigation-link  py-0.5 text-gray-500 relative"}
            to={role === Role.customer ? "CUSTOMER/archive" : "archive"}>
            Arxivlar
          </NavLink>
          <NavLink
            className={"navigation-link  py-0.5 text-gray-500 relative"}
            to={role === Role.customer ? "CUSTOMER/disabled" : "disabled"}>
            O'chirilganlar
          </NavLink>
        </div>
        <div>
          <Button onClick={showModal} type="primary">
            + Qo'shish
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <PartnerPopup
          user_role={user_role}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default React.memo(Navigation);
