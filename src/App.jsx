import { Routes, Route } from 'react-router-dom';
import Bmi_page from './components/Bmi_page';
import Home_page from './components/Home_page';
import Information_page from './components/Information_page';
import Bmi_level_page from './components/Bmi_level_page';
import TDEE_page from './components/TDEE_page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home_page />} />
      <Route path="/information" element={<Information_page />} />
      <Route path="/bmi" element={<Bmi_page />} />
      <Route path="/bmi-level" element={<Bmi_level_page />} />
      <Route path="/tdee" element={<TDEE_page />} />
    </Routes>
  );
}

export default App;