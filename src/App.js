import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import MovieSummary from './Pages/MovieSummary';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

// We extract the logic to a separate component so useLocation works
function MainApp() {
  const location = useLocation();
  const showOverlay = location.pathname === '/'; // only on homepage

  return (
    <div className="App">
      {showOverlay && (
        <div className="overlay">
          {/* Red curtain overlay only on homepage */}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movie/:id" element={<MovieSummary />} />
      </Routes>
    </div>
  );
}

export default App;
