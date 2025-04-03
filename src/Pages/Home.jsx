import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div><section id="LandingPage">
    <nav className="NavBar">
      <div className="Logo">
        <img src={""} alt="Logo" className="Logo" />
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
      <button className="Menu" id="burgerButton">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="burger-menu" id="burgerMenu">
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
        <input
          type="text"
          placeholder="Search by Genre, Director or Keyword"
          className="InputSearch"
        />
       <Link to="/movies">
  <button className="Loading Not-Loading">
    <span className="StreamNow">Stream Now</span>
    <i className="fa-solid fa-magnifying-glass"></i>
  </button>
</Link>
      </div>
      <img src={""} alt="Film roll" className="FilmRoll" />
    </div>
  </section></div>
  )
}

