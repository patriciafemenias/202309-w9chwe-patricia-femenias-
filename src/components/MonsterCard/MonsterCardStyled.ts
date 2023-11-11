import styled from "styled-components";

const MonsterCardStyled = styled.article`
  text-align: center;
  margin: 20px;
  margin-top: 20px;
  width: 330px;
  background-color: #000;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 40px;
  box-shadow: 0 0 25px ${({ theme }) => theme.colors.accent};
  font-size: 16px;

  .monster-card {
    &__data {
      flex-direction: column;
      align-items: center;
      margin: 0;
      color: ${({ theme }) => theme.colors.light};
    }

    &__name {
      color: ${({ theme }) => theme.colors.accent};
      text-transform: uppercase;
      margin: 20px;
      font-size: 20px;
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      grid-gap: 5px;
      align-items: flex-start;
      justify-items: start;
      justify-content: flex-start;
    }

    &__title-info {
      font-weight: bold;
      text-transform: uppercase;
      color: #76bcce;
    }

    &__info {
      color: #dcf967;
    }

    &__image {
      object-fit: contain;
      margin-bottom: 20px;
    }

    @media (max-width: 360px) {
      width: 220px;
    }
  }
`;

export default MonsterCardStyled;
