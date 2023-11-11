import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo-container {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.backGroundHeader}
    );
    display: inline-block;
    width: 100vw;
  }
  .header-logo {
    object-fit: cover;
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 20px;
  }
`;

export default HeaderStyled;
