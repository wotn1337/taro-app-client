import { ConfigProvider } from "antd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#292966",
        },
        components: {
          Layout: {
            bodyBg: "#CCCCFF",
          },
        },
        cssVar: true,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
