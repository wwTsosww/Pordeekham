// App.jsx
import { Routes, Route } from 'react-router-dom';
import BmiPage from './components/BmiPage';
import HomePage from './components/HomePage';
import NutrientPage from './components/NutrientPage';

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
