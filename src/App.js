
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Search from './Pages/Search';




function App() {
  return (
    <BrowserRouter> 
    <div className="App">
    <Routes>
          <Route path="/" element={<Home />} />  {/* Home route */}
          <Route path="/movies" element={<Search />} />  {/* Search route */}
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
