import React, { useState } from "react";
import * as _ from "./style";
import Visible from "../../Assets/img/Visible.svg";
import NotVisible from "../../Assets/img/NotVisible.svg";

type InputType = "text" | "password";

interface InputProps {
  label: string;
  width: number;
  type?: InputType;
  placeholder: string;
  unit?: React.ReactElement | boolean;
  disabled?: boolean;
}

const Input = ({
  label,
  width,
  type = "text",
  placeholder,
  unit,
  disabled = false,
}: InputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <_._Container>
      <label>
        <_._Label disabled={disabled}>{label}</_._Label>
        <_._InputWrapper width={width}>
          <_._Input
            type={(isOpen && "text") || type}
            placeholder={placeholder}
            disabled={disabled}
          />
          {type === "password" && (
            <_._Unit onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <img src={Visible} alt="visible" />
              ) : (
                <img src={NotVisible} alt="notvisible" />
              )}
            </_._Unit>
          )}
          {unit && <_._Unit>{unit}</_._Unit>}
        </_._InputWrapper>
      </label>
    </_._Container>
  );
};

export default Input;
