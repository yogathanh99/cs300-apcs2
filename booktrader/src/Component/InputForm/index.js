import React from "react";
import styled from "styled-components";

import "./style.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const InputForm = ({ name, type, onChange, value }) => {
  return (
    <Wrapper>
      <form className="group">
        <input type={type} onChange={onChange} value={value} />
        <span className="highlight" />
        <span className="bar" />
        <label>{name}</label>
      </form>
    </Wrapper>
  );
};

export default InputForm;
