import React, { useState } from "react";
import * as _ from "./style";
import Down from "../../Assets/img/Down.svg";

const list = [
  "아시아",
  "북아메리카",
  "남아메리카",
  "유럽",
  "아프리카",
  "오세아니아",
];

const Dropdown = () => {
  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState("카테고리");
  return (
    <_._Wrpaper>
      <_._Selector isSelcted={value} onClick={() => setIsClick(!isClick)}>
        {value}
        <img src={Down} alt="down" />
      </_._Selector>
      {isClick && (
        <_._Options>
          {list.map((item) => (
            <_._Option
              onClick={() => {
                setValue(item);
                setIsClick(!isClick);
              }}
            >
              {item}
            </_._Option>
          ))}
        </_._Options>
      )}
    </_._Wrpaper>
  );
};

export default Dropdown;
