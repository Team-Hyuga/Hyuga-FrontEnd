import React, { useState } from "react";
import styled from "styled-components";
import Input from "../input";
import Button from "../button";

const Signup1 = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <_Title>
        회원가입을 위하여
        <br />
        이메일 인증을 진행할게요! 😉
      </_Title>
      <Input
        label="이메일"
        width={560}
        placeholder="example@ex.com"
        unit={
          <Button
            width={80}
            size="small"
            color="blue200"
            onClick={() => setClick(true)}
          >
            발급하기
          </Button>
        }
      />
      {click && <_Cerify>인증코드가 적어주신 메일로 발송되었어요.</_Cerify>}
      <Input
        label="인증코드"
        width={560}
        placeholder="6자리 코드를 입력해주세요."
      />
    </div>
  );
};

export default Signup1;

const _Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.black100};
`;

const _Cerify = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.blue100};
  margin-top: 16px;
`;
