import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import CandidatDashboard from './pages/CandidatDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/candidat" element={<CandidatDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
