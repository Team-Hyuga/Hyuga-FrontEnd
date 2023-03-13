import React from "react";
import styled from "styled-components";
import Input from "../input";

const Reset2 = () => {
  return (
    <div>
      <_Title>
        이메일 인증이 완료되었어요!
        <br />
        이제 새 비밀번호를 알려주세요
      </_Title>
      <Input label="이메일" width={560} placeholder="example@ex.com" disabled />
      <Input
        label="비밀번호"
        width={560}
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <Input
        label="비밀번호 확인"
        width={560}
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
      />
    </div>
  );
};

export default Reset2;

const _Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.black100};
`;
