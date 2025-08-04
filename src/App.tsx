import React from 'react';
    
function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bienvenue dans l'application QCM</h1>
      <p>Ceci est la version initiale de votre interface React avec TypeScript.</p>
    </div>
    
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import LoginPage from './pages/LoginPage';
    import AdminDashboard from './pages/AdminDashboard';
    import CandidatDashboard from './pages/CandidatDashboard';

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
