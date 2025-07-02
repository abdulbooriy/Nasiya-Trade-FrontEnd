import React from "react";
import AppProvider from "./provider";
import AppRouter from "./router";
import SuspenseContainer from "@/shared/components/fallback/SuspenseContainer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <AppProvider>
      <SuspenseContainer>
        <AppRouter />
        <ToastContainer />
      </SuspenseContainer>
    </AppProvider>
  );
};

export default React.memo(App);
