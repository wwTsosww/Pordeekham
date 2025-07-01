// App.jsx
import { Routes, Route } from 'react-router-dom';
import BmiPage from './components/BmiPage';
import HomePage from './components/HomePage';
import BmiLevelPage from './components/BmiLevelPage';
import TdeePage from './components/TdeePage';

import { UserDataProvider } from './context/UserDataContext'; // ✅ import provider

function App() {
  return (
    <UserDataProvider> {/* ✅ ครอบทุกหน้า */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bmi" element={<BmiPage />} />
        <Route path="/bmi-level" element={<BmiLevelPage />} />
        <Route path="/tdee" element={<TdeePage />} />
      </Routes>
    </UserDataProvider>
  );
}

export default App;
