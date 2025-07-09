import {
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
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
    name: "Profile",
    path: "/profile",
    icon: <UserOutlined className="text-xl" />,
  },
];
