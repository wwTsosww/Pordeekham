import { Routes, Route } from 'react-router-dom';
import BmiPage from './pages/BmiPage';
import HomePage from './pages/HomePage';
import NutrientPage from './pages/NutrientPage';
import BBmi from './pages/BBmi';

import { UserDataProvider } from './context/UserDataContext';

function App() {
  return (
    <UserDataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bmi" element={<BmiPage />} />
        <Route path="/nutrient" element={<NutrientPage />} />
        <Route path="/bbmi" element={<BBmi />} />
      </Routes>
    </UserDataProvider>
  );
}

export default App;
