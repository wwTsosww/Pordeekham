// App.jsx
import { Routes, Route } from 'react-router-dom';
import BmiPage from './components/BmiPage';
import HomePage from './components/HomePage';
import BmiLevelPage from './components/BmiLevelPage';
import TdeePage from './components/TdeePage';
import NutrientPage from './components/NutrientPage';

import { UserDataProvider } from './context/UserDataContext';

function App() {
  return (
    <UserDataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bmi" element={<BmiPage />} />
        <Route path="/bmi-level" element={<BmiLevelPage />} />
        <Route path="/tdee" element={<TdeePage />} />
        <Route path="/nutrient" element={<NutrientPage />} />
      </Routes>
    </UserDataProvider>
  );
}

export default App;
