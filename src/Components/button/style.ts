import styled from "styled-components";

interface ColorsProps {
  bgColor: string;
  fontColor: string;
}

export const _Wrapper = styled.div<{
  width: number;
  size: string;
  colors: ColorsProps;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => (props.size === "small" ? 32 : 62)}px;
  border-radius: ${(props) => (props.size === "small" ? 12 : 16)}px;
  background-color: ${(props) => props.colors.bgColor};
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.colors.fontColor};
  padding: 12px 16px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;
