import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Search from './Pages/Search';
import MovieSummary from './Pages/MovieSummary';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         {/* Red Curtain Overlay */}
         <div className="overlay">
          {/* The overlay is styled in App.css */}
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/movies" element={<Search />} /> {/* Search route */}
          <Route path="/movie/:id" element={<MovieSummary />} /> {/* MovieSummary route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
