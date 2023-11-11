import MonstersList from "../../components/MonstersList/MonstersList";
import monstersMock from "../../data/monstersMock";
import PageStyled from "../PageStyled";

const MonsterPage = (): React.ReactElement => {
  return (
    <PageStyled>
      <div className="title-page__container">
        <span className="title-page__emoji">💀</span>
        <h2 className="title-page">Monsters friends and enemies</h2>
        <span className="title-page__emoji">💀</span>
      </div>
      <MonstersList monsters={monstersMock} />
    </PageStyled>
  );
};

export default MonsterPage;
