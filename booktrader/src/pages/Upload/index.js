import React from "react";
import styled from "styled-components";

import { Input } from "../../Component/InputForm";
import Button from "../../Component/Button";
import Footer from "../../Component/Footer";

const Wrapper = styled.div`
  margin-top: 7rem;
`;

const WrapperFooter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`;

const Tag = styled.span`
  font-family: "Manjari", sans-serif;
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem 0.5rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  text-transform: capitalize;
  background: rgba(196, 196, 196, 0.35);
  cursor: pointer;
`;

const TagName = styled.p`
  text-align: center;
  font-family: Abhaya Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 3rem;
`;

const Content = styled.div`
  text-align: center;
`;

const Upload = () => {
  return (
    <Wrapper>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Input name="What is the name of the book ?" />
        <TagName>
          Tags: <Tag>Hello</Tag>
          <Tag>Hi</Tag>
        </TagName>
        <Content>
          <Input name="What does your book look like ? (Link image)" />
          <Input name="Describe..." />
          <Button>Share</Button>
        </Content>
      </div>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </Wrapper>
  );
};

export default Upload;
