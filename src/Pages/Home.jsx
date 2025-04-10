import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Audience from '../assets/Audience.png';
import Blackfilmscore from '../assets/Blackfilmscore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <section id="LandingPage">
        <nav className="NavBar">
          <div className="Logo">
            <img src={Blackfilmscore} alt="Logo" className="Logo" />
          </div>
          <div className="NavBar__Links">
            <Link to="/" className="Home-Active">
              Home
            </Link>
            <Link to="/movies" className="SearchYourFilm">
              Search for movie
            </Link>
            <button className="ContactButton">Contact</button>
          </div>

          {/* Burger Menu Button */}
          <button className="Menu" id="burgerButton" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Burger Menu */}
          <div className={`burger-menu ${menuOpen ? 'open' : ''}`} id="burgerMenu">
            <Link to="/">Home</Link>
            <Link to="/movies">Search for movie</Link>
            <button className="ContactButton">Contact</button>
          </div>
        </nav>
      </section>

      <section className="Container">
        <div className="FirstContainer">
          <h1 className="FirstHeader">
            America's most awarded Film streaming platform
          </h1>
          <h2 className="Header2">
            Discover timeless classics with{" "}
            <span className="ChangeColor">The Film Score</span>
          </h2>
          <div className="input-wrapper">
            <Link to="/movies">
              <button className="Loading Not-Loading flex items-center">
                <span className="StreamNow">Stream Now</span>
              </button>
            </Link>
          </div>
          <img src={Audience} alt="Film roll" className="FilmRoll" />
        </div>
      </section>
    </div>
  );
}
