import { Typography } from "antd";
import { FC } from "react";

type Props = {};

export const TaroLayoutPage: FC<Props> = ({}) => {
  return (
    <Typography.Title level={1} style={{ color: "whitesmoke" }}>
      Тут делают расклад
    </Typography.Title>
  );
};
