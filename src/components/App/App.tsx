import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import MonsterPage from "../../pages/MonstersPage/MonstersPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/monsters" />} />
          <Route path="/monsters" element={<MonsterPage />} />
          <Route path="/" element={<Navigate to="/create" />} />
          <Route path="/create" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
