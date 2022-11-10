import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiseaseSearch from './pages/DiseaseSearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiseaseSearch />} />
        <Route path="/sick/:sickNm" element={<div>detail</div>} />
      </Routes>
    </Router>
  );
}

export default App;
