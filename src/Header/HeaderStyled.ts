import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header-logo {
    object-fit: cover;
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export default HeaderStyled;
