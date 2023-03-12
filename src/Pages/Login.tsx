import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SingupImg from "../Assets/img/Signup2.svg";
import Button from "../Components/button";
import Input from "../Components/input";

const LoginPage = () => {
  return (
    <_Container>
      <_Wrapper>
        <img src={SingupImg} alt="SingupImg" />
        <div>
          <_Title>
            더 많은 서비스를 위하여
            <br />
            로그인을 진행할게요 ✨
          </_Title>
          <Input label="이메일" width={560} placeholder="example@ex.com" />
          <Input
            label="비밀번호"
            width={560}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <div style={{ marginTop: "48px", position: "relative" }}>
            <Button
              width={560}
              size="big"
              color="blue100"
              onClick={() => console.log("clicked")}
            >
              인증완료
            </Button>
            <Link to="/signup">
              <_ToSignup>
                &lsquo;휴식을 가지다&rsquo;에 계정이 없으신가요?
              </_ToSignup>
            </Link>
          </div>
        </div>
      </_Wrapper>
    </_Container>
  );
};

export default LoginPage;

const _Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
`;

const _Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.black100};
`;

const _ToSignup = styled.div`
  cursor: pointer;
  position: absolute;
  top: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 560px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.gray300};
  text-decoration: underline;
`;
