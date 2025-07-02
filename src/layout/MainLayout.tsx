import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/service/useAuth";
import { useDispatch } from "react-redux";
import SideBar from "./components/sidebar/SideBar";
import Nav from "./components/nav/Nav";
import { logout } from "@/features/auth/store/auth.slice";

const MainLayout = () => {
  const { getMe } = useAuth();
  const { isError } = getMe();
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (isError) {
      dispatch(logout());
    }
  }, [isError]);

  return (
    <div className="flex">
      <SideBar show={show} />
      <main className="flex-1 bg-base-bg">
        <Nav setShow={setShow} show={show} />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default React.memo(MainLayout);
