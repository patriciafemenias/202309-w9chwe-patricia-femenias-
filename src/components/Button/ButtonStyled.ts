import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.typography.mainFont};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid #000;
  border-radius: 14px;
  padding: 8px 16px;
  margin: 30px;
  width: 280px;
  height: 40px;
  font-size: 16px;
  text-transform: uppercase;
  justify-content: center;
  box-shadow: 0 0 25px ${({ theme }) => theme.colors.accent};
`;

export default ButtonStyled;
