import { UserOutlined } from "@ant-design/icons";
import { RiCustomerServiceLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Mijozlar",
    path: "/",
    icon: <RiCustomerServiceLine className="text-xl" />,
  },
  {
    id: 2,
    name: "Sotuvchilar",
    path: "/seller",
    icon: <UserOutlined className="text-xl" />,
  },
  {
    id: 3,
    name: "Profile",
    path: "/profile",
    icon: <CgProfile className="text-xl" />,
  },
];
