import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Blackfilmscore from '../assets/Blackfilmscore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faSort } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [input, setInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchMovies = async (sortOrder) => {
    if (!input) return;
    setLoading(true);
    setSearched(true); // Mark that a search has been made
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=b89bd989&s=${input}`);
      const data = await response.json();

      let sorted = data.Search || [];
      if (sortOrder === 'NEW_TO_OLD') {
        sorted = sorted.sort((a, b) => b.Year - a.Year);
      } else if (sortOrder === 'OLD_TO_NEW') {
        sorted = sorted.sort((a, b) => a.Year - b.Year);
      }

      // Simulate delay
      setTimeout(() => {
        setMovies(sorted);
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error('Error fetching:', err);
      setMovies([]);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    fetchMovies(e.target.value); // Fetch movies based on the selected filter
  };

  const handleSearchClick = () => {
    if (input.trim() !== '') {
      fetchMovies(filter); // Trigger fetching movies with the selected filter
    }
  };

  const handleSortClick = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      return a.Title.localeCompare(b.Title); 
    });
    setMovies(sortedMovies);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div>
      <div className="overlay"><div className="glowing-divider"></div></div>
      <section id="LandingPage">
        <nav className="NavBar">
          <div className="Logo">
            <img src={Blackfilmscore} alt="Logo" className="Logo" />
          </div>
          <div className="NavBar__Links">
            <Link to="/" className="Home-Active">Home</Link>
            <ScrollLink to="SearchResults" smooth={true} duration={500} className="SearchYourFilm">Search for movie</ScrollLink>
            <button className="ContactButton">Contact</button>
          </div>
          <button className="Menu" id="burgerButton" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>    
          <div className={`burger-menu ${menuOpen ? 'open' : ''}`} id="burgerMenu">
            <Link to="/">Home</Link>
            <Link to="/#SearchResults">Search for movie</Link>
            <button className="ContactButton">Contact</button>
          </div>  
        </nav>
        <div className="BrowseInputContainer">
          <h1 className="BrowseClickWatch">Browse. Click. Watch.</h1>
          <div className="InputWrapper__Browse">
            <input
              className="BrowseMovieInput"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search by Title, Year, Genre"
            />
            <button className="SearchButton" onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '20px', color: 'yellow' }} />
            </button>
          </div>
        </div>
        {searched && (
          <section id="SearchResults">
            {movies.length > 0 && (
              <h2 className="SearchResultsTitle">Search results:</h2>
            )}
            {/* More content */}
          </section>
        )}
        <div className="filter__selector">
          <h4 className="filter__title">
            Filter <FontAwesomeIcon icon={faSort} style={{ color: '#e3b202' }} />
          </h4>
          <select value={filter} onChange={handleFilterChange}>
            <option value="" disabled>Sort</option>
            <option value="NEW_TO_OLD">New to Old</option>
            <option value="OLD_TO_NEW">Old to New</option>
          </select>
        </div>

        <div className="Filter">
          {loading ? (
            <div className="LoadingState"><div className="Loading">Loading...</div></div>
          ) : (
            movies.length > 0 ? movies.map((movie) => (
              <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="MovieCard">
                <img src={movie.Poster} alt={movie.Title} />
                <h4 className="MovieTitle">{movie.Title}</h4>
                <h5 className="MovieTitle">Year: <span>{movie.Year}</span></h5>
                <h5 className="MovieTitle">Type: <span>{movie.Type}</span></h5>
              </Link>
            )) : searched && <p>No movies found!</p> // Only show "No movies found!" after search
          )}
        </div>
      </section>
    </div>
  );
}
