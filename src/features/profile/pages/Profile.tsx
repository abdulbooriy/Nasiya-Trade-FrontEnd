import { useAuth } from "@/features/auth/service/useAuth";
import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import { Avatar, Tag } from "antd";
import React from "react";

const Profile = () => {
  const { getMe } = useAuth();
  const { data } = getMe();

  return (
    <Box>
      <Title>Shaxsiy Ma'lumotlar</Title>
      <div className="flex py-10 items-center pl-20 gap-20">
        <div className="flex flex-col gap-2.5">
          <Avatar
            size={120}
            src="https://mahamatjanov.uz/file/1751637048739.png"
            style={{ borderColor: "gray" }}
          />
          <Tag
            color="#5bbc5d"
            style={{ textAlign: "center", padding: "4px", fontWeight: "bold" }}>
            {data?.status}
          </Tag>
        </div>
        <div>
          <p>Ism Familiya</p>
          <h3 className="text-xl font-medium">{data?.fullName}</h3>
        </div>
        <div>
          <p>Telefon raqam</p>
          <h2 className="text-xl font-medium">{data?.phone?.telFormat()}</h2>
        </div>
      </div>
    </Box>
  );
};

export default React.memo(Profile);
