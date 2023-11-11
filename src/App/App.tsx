import { Routes, Route, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/monsters" />} />
        <Route path="/monsters" />
      </Routes>
    </main>
  );
};

export default App;
