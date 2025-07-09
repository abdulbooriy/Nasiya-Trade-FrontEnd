import {
  SettingOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  ProductOutlined,
} from "@ant-design/icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Mijozlar",
    path: "/",
    icon: <UserAddOutlined className="text-xl" />,
  },
  {
    id: 2,
    name: "Sotuvchilar",
    path: "/SELLER",
    icon: <UserDeleteOutlined className="text-xl" />,
  },
  {
    id: 3,
    name: "Mahsulotlar",
    path: "/product",
    icon: <ProductOutlined className="text-xl" />,
  },
  {
    id: 4,
    name: "Sozlamalar",
    path: "/profile",
    icon: <SettingOutlined className="text-xl" />,
  },
];
