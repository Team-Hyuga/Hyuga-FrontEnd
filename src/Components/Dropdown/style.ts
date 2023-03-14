import styled from "styled-components";

export const _Wrpaper = styled.div`
  position: relative;
  width: 168px;
`;

export const _Selector = styled.div<{ isSelcted?: string }>`
  cursor: pointer;
  width: 168px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, isSelcted }) =>
    isSelcted !== "카테고리" ? theme.black100 : theme.gray300};
  border: 1px solid ${({ theme }) => theme.gray400};
  border-radius: 16px;
  padding: 0px 16px;
`;

export const _Options = styled.div`
  position: absolute;
  top: 56px;
  width: 168px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.gray400};
  border-radius: 16px;
  z-index: 10;
`;

export const _Option = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.black100};
`;
