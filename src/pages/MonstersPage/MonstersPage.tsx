import PageStyled from "../PageStyled";

const MonsterPage = (): React.ReactElement => {
  return (
    <PageStyled>
      <div className="title-page__container">
        <span className="title-page__emoji">💀</span>
        <h2 className="title-page">Monsters friends and enemies</h2>
        <span className="title-page__emoji">💀</span>
      </div>
    </PageStyled>
  );
};

export default MonsterPage;
