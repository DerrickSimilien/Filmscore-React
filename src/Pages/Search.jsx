import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

export default function Search() {
  return (
    <div><div className="overlay">
    <div className="glowing-divider"></div>
</div>
<section id="LandingPage">
    <nav className="NavBar">
        <div className="Logo">
            <img src="./assets/Black film score.png" alt="" className="Logo" />
        </div>
        <div className="NavBar__Links">
        <Link to="/" className="Home-Active">Home</Link>
<ScrollLink to="SearchResults" smooth={true} duration={500} className="SearchYourFilm">
    Search for movie
</ScrollLink>
            <button className="ContactButton">Contact</button>
        </div>
        <button className="Menu" id="burgerButton">
            <i className="fa-solid fa-bars"></i>
        </button>
        <div className="burger-menu" id="burgerMenu">
        <Link to="/">Home</Link>
        <Link to="/#SearchResults">Search for movie</Link>
            <button className="ContactButton">Contact</button>
        </div>
    </nav>
    <div className="BrowseInputContainer">
        <h1 className="BrowseClickWatch">
            Browse. Click. Watch.
        </h1>
        <div className="InputWrapper__Browse">
            <input className="BrowseMovieInput" type="text" placeholder="Search by Title, Year, Genre" />
            <button className="SearchButton" onclick="Searchmovie()">
                <i classMame="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </div>
    <section id="SearchResults">
        <h2 className="SearchResultsTitle">Search results: </h2>
        <div className="filter__selector">
            <h4 className="filter__title">Filter 
            <i className="fa-solid fa-sort" style={{ color: '#e3b202' }}></i>
            </h4>
            <select id="filter" onchange="filterMovies(event)">
                <option value="" disabled selected>Sort</option>
                <option value="NEW_TO_OLD">New to Old</option>
                <option value="OLD_TO_NEW">Old to New</option>
            </select>
                </div>
       <div className="Filter">
        <div className="MovieCard" >
            <div className="LoadingState">
                <div className="Loading">Loading...</div>
              </div>
            </div>
       </div>
    </section>
    </section></div>
  )
}
