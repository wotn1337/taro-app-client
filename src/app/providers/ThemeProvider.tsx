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
          fontFamily: '"Playfair Display", serif',
        },
        components: {
          Layout: {
            bodyBg: "transparent",
          },
        },
        cssVar: true,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
