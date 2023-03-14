import styled from "styled-components";

export const _Container = styled.div`
  width: 336px;
  height: 223px;
  background-color: ${({ theme }) => theme.white500};
  border-radius: 16px;
  padding: 24px;
`;

export const _Img = styled.img`
  width: 288px;
  height: 120px;
  border-radius: 16px;
`;

export const _Div = styled.div`
  width: 288px;
  height: 43px;
  margin-top: 12px;
`;

export const _Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.black100};
`;

export const _Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 288px;
`;

export const _Set = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const _Options = styled.div`
  position: absolute;
  top: 10px;
  width: 94px;
  height: 66px;
  background-color: ${({ theme }) => theme.white600};
  border: 1px solid ${({ theme }) => theme.white500};
  border-radius: 16px;
`;

export const _Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 33px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.black100};
`;

export const _Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.black200};
`;

export const _Trust = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.blue100};
`;
