import { Layout as AntdLayout } from "antd";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.scss";

type Props = {};

const { Content } = AntdLayout;

export const Layout = ({}: Props) => {
  return (
    <AntdLayout className={s.layout}>
      <Content className={s.content}>
        <Outlet />
      </Content>
    </AntdLayout>
  );
};
