import { MonsterStructure } from "../../store/features/monsters/types";
import MonsterCard from "../MonsterCard/MonsterCard";

interface MonstersListProps {
  monsters: MonsterStructure[];
}

const MonstersList = ({ monsters }: MonstersListProps): React.ReactElement => {
  return (
    <ul>
      {monsters.map((monster) => (
        <li key={monster.id}>
          <MonsterCard monster={monster} />
        </li>
      ))}
    </ul>
  );
};

export default MonstersList;
