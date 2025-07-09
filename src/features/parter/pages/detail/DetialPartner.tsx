import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { usePartner } from "../../service/usePartner";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button, Skeleton, Tag, type MenuProps } from "antd";
import { Role } from "@/shared/const";
import Options from "@/shared/ui/Options";
import { useShow } from "@/shared/hooks/useShow";
import TelPopup from "@/shared/components/tel-popup/TelPopup";
import useGetRole from "@/shared/hooks/useGetRole";
import PaymentPopup from "@/features/payment/components/payment-popup/PaymentPopup";

const DetialPartner = () => {
  const { id } = useParams();
  const { getPartner } = usePartner();
  const { handleShow } = useShow();
  const navigate = useNavigate();
  const { data, isPending } = getPartner(id || "");
  const role = useGetRole();

  const isCustomer = role === Role.customer;
  const isActive = data?.isActive && !data?.isArchive;

  const handleArchive = () => {};

  const items: MenuProps["items"] = [
    {
      label: (
        <span className=" block" onClick={handleShow}>
          O'zgartirish
        </span>
      ),
      key: "0",
    },
    {
      label: (
        <span className="block" onClick={handleArchive}>
          {data?.isArchive ? "Arxivdan chiqarish" : "Arxivlash"}
        </span>
      ),
      key: "1",
    },
    {
      label: <span className=" block">Lokatsiya</span>,
      key: "2",
    },
  ];

  return isPending ? (
    <Box>
      <Skeleton active />
    </Box>
  ) : (
    <Box>
      <div className="flex items-center justify-between relative">
        <div className="flex flex-col items-start gap-2 mb-20">
          <Badge
            count={data?.role === Role.customer ? "Mijoz" : "Sotuvchi"}
            style={{ backgroundColor: "#000" }}>
            <Title className="mt-0.5 text-3xl">{data?.fullName}</Title>
          </Badge>

          <div className="pt-2.5">
            <div className="text-base text-gray-500 flex gap-2.5">
              Manzili: <p className="font-bold">{data?.address}</p>
            </div>
            <div className="text-base text-gray-500 flex gap-2.5">
              <p>Ro'yxatga olgan shaxs: </p>
              <Link to={"/"} className="font-bold">
                {data?.user?.fullName}
              </Link>
            </div>
          </div>

          <div>
            <Tag
              style={{ fontWeight: "bold", marginTop: 10 }}
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
        </div>

        <div className="flex flex-col gap-5">
          {/*  */}
          <div className="flex flex-col gap-5 mt-15">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs text-gray-500">Asosiy raqam</p>
              <TelPopup phoneNumber={data?.phones[0]} />
            </div>
            {data?.phones[1] && (
              <div className="flex flex-col gap-1.5">
                <p className="text-xs text-gray-500">Ikkinchi raqam</p>
                <TelPopup phoneNumber={data?.phones[1]} />
              </div>
            )}
          </div>
          {/*  */}
          <div className="flex gap-3 items-center justify-between">
            <Button
              type="primary"
              onClick={() => navigate(isCustomer ? "sell" : "buy")}>
              {role === Role.customer ? "Sotish" : "Xarid qilish"}
            </Button>
            <PaymentPopup role={role} id={data?.id}>
              <Button type="primary">To'lov</Button>
            </PaymentPopup>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Options items={items} />
        </div>
      </div>
    </Box>
  );
};

export default React.memo(DetialPartner);
