import React, { ReactNode } from "react";
import * as _ from "./style";

type SizeType = "small" | "big";
type ColorType = "blue100" | "blue200" | "red" | "white500";

interface ButtonProps {
  width: number;
  size: SizeType;
  color: ColorType;
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ width, size, color, onClick, children }: ButtonProps) => {
  const ColorGenrator = (color: ColorType) => {
    switch (color) {
      case "blue100":
        return { bgColor: "#524FFF", fontColor: "#F8F8F8" };
      case "blue200":
        return { bgColor: "#F7F6FF", fontColor: "#524FFF" };
      case "red":
        return { bgColor: "#FB2828", fontColor: "#FFFFFF" };
      case "white500":
        return { bgColor: "#F8F8F8", fontColor: "#1D1D1D" };
      default:
        return { bgColor: "#524FFF", fontColor: "#F8F8F8" };
    }
  };
  const colors = ColorGenrator(color);
  return (
    <_._Wrapper width={width} size={size} colors={colors} onClick={onClick}>
      {children}
    </_._Wrapper>
  );
};

export default Button;
