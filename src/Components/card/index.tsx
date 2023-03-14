import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as _ from "./style";
import Modal from "../modal/Modal";
import { ModalType } from "../../interface/Modal";
import Option from "../../Assets/img/Option.svg";

type KindTypes = "main" | "my";

interface CardProps {
  link: number;
  kind: KindTypes;
  img: any;
  title: string;
  name?: string;
  trust?: number;
  modalType?: ModalType;
}

const Card = ({
  link,
  kind,
  img,
  title,
  name,
  trust,
  modalType,
}: CardProps) => {
  const [isClick, setIsClick] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <_._Container>
      {modal && (
        <Modal type={modalType || "logout"} setOpen={setModal} title={title} />
      )}
      <Link to={`/main/${link}`}>
        <_._Img src={img} alt="img" />
      </Link>
      <_._Div>
        <_._Wrapper>
          <_._Title>{title}</_._Title>
          {kind === "my" && (
            <_._Set onClick={() => setIsClick(!isClick)}>
              <img src={Option} alt="meatball" />
              {isClick && (
                <_._Options>
                  <_._Option>수정</_._Option>
                  <_._Option onClick={() => setModal(true)}>삭제</_._Option>
                </_._Options>
              )}
            </_._Set>
          )}
        </_._Wrapper>
        {kind === "main" && (
          <_._Wrapper>
            <_._Name>{name}</_._Name>
            <_._Trust>{trust}점</_._Trust>
          </_._Wrapper>
        )}
      </_._Div>
    </_._Container>
  );
};

export default Card;
