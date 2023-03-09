import styled from "styled-components";

export const _Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const _Label = styled.div<{ disabled: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, disabled }) =>
    disabled ? theme.gray300 : theme.black100};
`;

export const _InputWrapper = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  border: none;
`;

export const _Input = styled.input<{ disabled: boolean }>`
  cursor: ${({ disabled }) => disabled && "no-drop"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.black100};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray400};
  &:focus {
    border-bottom-color: ${({ theme }) => theme.black100};
  }
  &::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.gray300};
  }
`;

export const _Unit = styled.div`
  position: absolute;
  right: 0px;
  bottom: 12px;
`;
