import { useDrag } from "@use-gesture/react";
import { FC, useState } from "react";
import { useSpring } from "react-spring";
import LayoutImage from "../../../../public/layout_card.webp";
import LogoutImage from "../../../../public/logout_card.webp";
import ProfileImage from "../../../../public/profile_card.webp";
import { Card } from "./Card";
import s from "./CardsMenu.module.scss";

type Props = {};

export type MenuItem = {
  link: string;
  label: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    link: "layout",
    label: "Сделать расклад",
    image: LayoutImage,
  },
  {
    link: "profile",
    label: "Профиль",
    image: ProfileImage,
  },
  {
    link: "logout",
    label: "Выйти",
    image: LogoutImage,
  },
];

export const CardsMenu: FC<Props> = ({}) => {
  const [index, setIndex] = useState(0);

  const handleSwipe = () => {
    setIndex((prevIndex) =>
      prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [springProps, api] = useSpring(() => ({
    x: 0,
    rotateY: 0,
    rotateZ: 0,
    config: { tension: 300, friction: 30 },
  }));

  const bind = useDrag(
    ({ down, movement: [mx] }) => {
      if (!down && Math.abs(mx) > 300) {
        api.start({ x: 0, rotateY: 0, rotateZ: 0 });
        handleSwipe();
      } else {
        api.start({
          x: down ? mx : 0,
          rotateY: down ? mx / 10 : 0,
          rotateZ: down ? mx / 10 : 0,
        });
      }
    },
    { filterTaps: true, axis: "x" }
  );

  return (
    <div className={s.cardsMenu}>
      <Card
        bindProps={bind()}
        springProps={springProps}
        item={menuItems[index]}
      />
    </div>
  );
};
