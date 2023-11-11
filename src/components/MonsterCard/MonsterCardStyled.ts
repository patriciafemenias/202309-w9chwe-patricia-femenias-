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

  .monster-card {
    &__data {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      color: ${({ theme }) => theme.colors.light};
    }

    &__title {
      color: ${({ theme }) => theme.colors.light};
      text-transform: uppercase;
      margin: 20px;
    }

    &__info-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      align-items: center;
      justify-items: start;
    }

    &__title-info {
      font-weight: bold;
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
