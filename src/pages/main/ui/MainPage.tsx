import { selectUser } from "@/entities/user";
import { FC } from "react";
import { useSelector } from "react-redux";

type Props = {};

export const MainPage: FC<Props> = ({}) => {
  const user = useSelector(selectUser);
  return (
    <>
      <div>main page</div>
      <div>{user?.username}</div>
    </>
  );
};
