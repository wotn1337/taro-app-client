import { ReactDOMAttributes } from "@use-gesture/react/dist/declarations/src/types";
import { Flex } from "antd";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { animated, SpringValue } from "react-spring";
import s from "./Card.module.scss";
import { MenuItem } from "./CardsMenu";

type Props = {
  bindProps: ReactDOMAttributes;
  springProps: {
    x: SpringValue<number>;
    rotateY: SpringValue<number>;
    rotateZ: SpringValue<number>;
  };
  item: MenuItem;
};

export const Card: FC<Props> = ({ bindProps, springProps, item }) => {
  return (
    <animated.div {...bindProps} className={s.card} style={{ ...springProps }}>
      <NavLink to={item.link} className={s.link}>
        <Flex justify="center" align="center" className={s.linkInner} vertical>
          <img
            src={item.image}
            height="100%"
            width="100%"
            className={s.image}
          />
          <div className={s.label}>{item.label}</div>
        </Flex>
      </NavLink>
    </animated.div>
  );
};
