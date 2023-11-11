import { MonsterStructure } from "../../store/features/monsters/types";
import MonsterCardStyled from "./MonsterCardStyled";

interface MonsterCardProps {
  monster: MonsterStructure;
}

const MonsterCard = ({
  monster: { name, age, monsterType, isFriend, picture },
}: MonsterCardProps): React.ReactElement => {
  return (
    <MonsterCardStyled className="monster-card">
      <div className="monster-card__data">
        <img
          className="monster-card__image"
          src={picture}
          alt={picture}
          width="260"
          height="400"
        />
        <h2 className="monster-card__name">{name}</h2>
        <dl className="monster-card__info-container">
          <dt className="monster-card__title-info">Type of monster:</dt>
          <dd className="monster-card__info">{monsterType}</dd>
          <dt className="monster-card__title-info">Age:</dt>
          <dd className="monster-card__info">{age} years old</dd>
          <dt className="monster-card__title-info">Relationship:</dt>
          <dd className="monster-card__info">{isFriend}</dd>
        </dl>
      </div>
    </MonsterCardStyled>
  );
};

export default MonsterCard;
