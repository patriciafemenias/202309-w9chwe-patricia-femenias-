import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .logo-container {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.backGroundHeader}
    );
    display: inline-block;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .header-logo {
    object-fit: cover;
    margin-bottom: 20px;
    width: 360px;
    height: 220px;
    padding-top: 20px;
  }

  @media (min-width: 820px) {
    .header-logo {
      width: 400px;
    }
  }
`;

export default HeaderStyled;
