import styled from "styled-components";

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f8f8f8;
  color: #333;

  @media (max-width: 768px) {

    font-size: 14px;
    padding: 7px;
  }
`;

export default Input;