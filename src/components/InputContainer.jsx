import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  /* Estilos responsive */
  @media (max-width: 768px) {
  flex-direction: column; 
  align-items: stretch; 
  }
`;

export default InputContainer;