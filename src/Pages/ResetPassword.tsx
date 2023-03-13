import React, { useState } from "react";
import styled from "styled-components";
import SingupImg from "../Assets/img/Signup2.svg";
import ResetPasswerd1 from "../Components/resetPassword/Reset1";
import ResetPasswerd2 from "../Components/resetPassword/Reset2";
import Button from "../Components/button";

const ResetPasswordPage = () => {
  const [current, setCurrent] = useState(0);
  return (
    <_Container>
      <_Wrapper>
        <img src={SingupImg} alt="Singup2Img" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {current === 0 ? <ResetPasswerd1 /> : <ResetPasswerd2 />}
          <div style={{ marginTop: "48px" }}>
            <Button
              width={560}
              size="big"
              color="blue100"
              onClick={() =>
                current === 0 ? setCurrent(current + 1) : console.log("clicked")
              }
            >
              인증완료
            </Button>
          </div>
        </div>
      </_Wrapper>
    </_Container>
  );
};

export default ResetPasswordPage;

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
