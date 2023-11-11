import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/monsters" />} />
          <Route path="/monsters" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
