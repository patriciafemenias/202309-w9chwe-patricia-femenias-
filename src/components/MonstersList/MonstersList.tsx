import { MonsterStructure } from "../../store/features/monsters/types";
import MonsterCard from "../MonsterCard/MonsterCard";
import MonstersListStyled from "./MonstersListStyled";

interface MonstersListProps {
  monsters: MonsterStructure[];
}

const MonstersList = ({ monsters }: MonstersListProps): React.ReactElement => {
  return (
    <MonstersListStyled>
      {monsters.map((monster) => (
        <li key={monster.id}>
          <MonsterCard monster={monster} />
        </li>
      ))}
    </MonstersListStyled>
  );
};

export default MonstersList;
