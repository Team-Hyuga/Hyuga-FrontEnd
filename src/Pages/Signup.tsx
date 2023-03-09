import React, { useState } from "react";
import styled from "styled-components";
import SingupImg from "../Assets/img/Signup1.svg";
import Signup1 from "../Components/signup/Signup1";
import Signup2 from "../Components/signup/Signup2";
import Button from "../Components/button";

const SignupPage = () => {
  const [current, setCurrent] = useState(0);
  return (
    <_Container>
      <_Wrapper>
        <img src={SingupImg} alt="Singup1Img" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {current === 0 ? <Signup1 /> : <Signup2 />}
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

export default SignupPage;

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
  gap: 152.05px;
`;
