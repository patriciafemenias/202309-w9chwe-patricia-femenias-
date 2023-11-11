import styled from "styled-components";

const AppStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  align-items: center;

  .title-page {
    color: ${({ theme }) => theme.colors.light};
    text-transform: uppercase;
    font-size: 20px;
  }
`;

export default AppStyled;
