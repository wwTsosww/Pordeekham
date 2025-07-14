import { Routes, Route } from 'react-router-dom';
import BmiPage from './pages/BmiPage';
import HomePage from './pages/HomePage';
import NutrientPage from './pages/NutrientPage';

import { UserDataProvider } from './context/UserDataContext';

function App() {
  return (
    <UserDataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bmi" element={<BmiPage />} />
        <Route path="/nutrient" element={<NutrientPage />} />
      </Routes>
    </UserDataProvider>
  );
}

export default App;
