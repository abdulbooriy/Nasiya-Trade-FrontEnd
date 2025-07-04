import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import { type ReactNode } from "react";
import { ConfigProvider, theme } from "antd";

const themeLight = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#000",
    colorBgBase: "#ffffff",
    colorTextBase: "#1f2937",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorBgContainer: "#fff",
  },
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider theme={themeLight}>{children}</ConfigProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;
