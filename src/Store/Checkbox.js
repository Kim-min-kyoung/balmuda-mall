import React, { useState } from 'react';
import styled from "styled-components";

function Checkbox(props) {
    const [ isClicked, setIsClicked ] = useState(true);
    return (
        <Label isClicked={isClicked}>
            <CheckImg isClicked={isClicked} />
            <Input defaultChecked onClick={(e) => setIsClicked(e.target.checked)} />
        </Label>
    );
}

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  background: ${({ isClicked }) => (isClicked ? "red" : "#eee")};
  border-radius: 2px;
`;

const CheckImg = styled.div`
  display: ${({ isClicked }) => (isClicked ? "block" : "none")};
  width: 14px;
  height: 12px;
  background-image: url("/img/checkIcon.png");
`;

const Input = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  width: 0;
  height: 0;
  margin: 0;
`;

export default Checkbox;