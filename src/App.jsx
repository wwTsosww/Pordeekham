import { Routes, Route } from 'react-router-dom';
import BmiPage from './pages/BmiPage';
import HomePage from './pages/HomePage';
import NutrientPage from './pages/NutrientPage';
import FoodPage from './pages/FoodPage';
import DrinksPage from './pages/DrinksPage';
import BakeryPage from './pages/BakeryPage';

import { UserDataProvider } from './context/UserDataContext';

function App() {
  return (
    <UserDataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bmi" element={<BmiPage />} />
        <Route path="/nutrient" element={<NutrientPage />} />
        <Route path="/FoodPage" element={<FoodPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/bakery" element={<BakeryPage />} />
      </Routes>
    </UserDataProvider>
  );
}

export default App;
