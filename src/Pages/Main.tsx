import React from "react";
import styled from "styled-components";
import Search from "../Assets/img/Search.svg";
import Card from "../Components/card";
import Dropdown from "../Components/Dropdown";
import { cardsAtMain } from "../Assets/data/card";

const Main = () => {
  return (
    <_Container>
      <_Wrapper>
        <_Header>
          <div>
            <_Title weight={600}>안녕하세요👋, 박시원님?</_Title>
            <br />
            <_Title weight={700}>즐거운 여행 준비 되셨나요?</_Title>
          </div>
          <div style={{ position: "relative" }}>
            <_Icon src={Search} alt="search" />
            <_SearchBar type="search" placeholder="검색어를 입력해주세요." />
          </div>
          <Dropdown />
        </_Header>
        <_Contents>
          {cardsAtMain.map((item) => (
            <Card
              link={item.id}
              kind="main"
              img={item.img}
              title={item.title}
              name={item.name}
              trust={item.trust}
            />
          ))}
        </_Contents>
      </_Wrapper>
    </_Container>
  );
};

export default Main;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  width: 1447px;
  margin-top: 108px;
`;

const _Header = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;
  width: 1447px;
  height: 84px;
`;

const _Title = styled.span<{ weight: number }>`
  font-size: 32px;
  font-weight: ${({ weight }) => weight};
`;

const _Icon = styled.img`
  position: absolute;
  top: 14px;
  left: 16px;
`;

const _SearchBar = styled.input`
  display: flex;
  align-items: center;
  width: 812px;
  height: 48px;
  background-color: ${({ theme }) => theme.white500};
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 50px;
  &::placeholder {
    font-weight: 600;
    color: ${({ theme }) => theme.gray300};
  }
`;

const _Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
