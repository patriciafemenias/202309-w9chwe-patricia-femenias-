import styled from "styled-components";

const PageStyled = styled.section`
  .title-page {
    text-transform: uppercase;
    font-size: 20px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.backGroundHeader}
    );
    z-index: 1;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 30px;

    &__container {
      display: flex;
      align-items: baseline;
    }

    &__emoji {
      font-size: 26px;
    }
  }
`;

export default PageStyled;
