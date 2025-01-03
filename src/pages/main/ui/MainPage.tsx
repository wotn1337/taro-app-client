import { selectUser } from "@/entities/user";
import { CardsMenu } from "@/widgets/cards-menu";
import { FC } from "react";
import { useSelector } from "react-redux";

type Props = {};

export const MainPage: FC<Props> = ({}) => {
  const user = useSelector(selectUser);
  return (
    <>
      <CardsMenu />
    </>
  );
};
