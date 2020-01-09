import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Button from "../../Component/Button";
import Message from "../../Component/Message";
import * as actions from "../../store/actions";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -1rem;
`;

const Wrapper = styled.div`
  height: 90vh;
  padding: 0;
  margin-top: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VerifyEmail = ({ loading, error, reSendVerify, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Wrapper>
      <h1>Verify your email</h1>
      <h3 style={{ fontWeight: "700" }}>
        Go to your email and check verif your email
      </h3>
      <Button
        loading={loading ? "Sending email..." : null}
        disabled={loading}
        onClick={() => reSendVerify()}
      >
        Re-send verify email
      </Button>
      <MessageWrapper>
        <Message error show={error}>
          {error}
        </Message>
      </MessageWrapper>
      <MessageWrapper>
        <Message success show={error === false}>
          Message sent successfully!
        </Message>
      </MessageWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.verifyEmail.loading,
  error: state.auth.verifyEmail.error
});

const mapDispatchToProps = {
  reSendVerify: actions.verifyEmail,
  cleanUp: actions.cleanUp
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
