import { Typography } from "antd";
import { FC } from "react";

type Props = {};

export const ProfilePage: FC<Props> = ({}) => {
  return (
    <Typography.Title level={1} style={{ color: "whitesmoke" }}>
      Профиль
    </Typography.Title>
  );
};
