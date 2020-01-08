import styled from "styled-components";

export const Style = styled.div`
  font-size: 25px;
  height: 100%;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  position: relative;
`;
export const Wrapper = styled.div`
  height: 100%;
  margin-top: 150px;
  margin-right: 100px;
  margin-bottom: 100px;
`;
export const Box = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  margin-left: 500px;
  height: 100%;
  margin-bottom: 20px;
  border: 2px solid black;
`;
export const StyleStrongText = styled.div`
  margin-bottom: 20px;
  font-weight: 900;
`;
export const Table = styled.div`
  display: flex;
  margin-bottom: 100px;
  justify-content: center;
  thead {
    text-align: center;
  }
  td {
    width: 400px;
    height: 60px;
  }
  table {
    border-collapse: collapse;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }
`;
export const Data = styled.input`
  border-bottom: none !important;
  position: absolute;
  left: 700px;
`;
