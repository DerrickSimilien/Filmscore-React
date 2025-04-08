import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieSummary.css'; // optional if you want separate CSS

const MovieSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=b89bd989&i=${id}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error('Error fetching movie:', err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p className="LoadingState">Loading...</p>;

  return (
    <div className="MovieSummaryContainer">
      <div className="BackButtonWrapper">
        <button className="BackButton" onClick={() => navigate('/movies')}>
          ⬅ Back to Search
        </button>
      </div>

      <div className="MovieCardExpanded">
        <img src={movie.Poster} alt={movie.Title} className="MoviePosterExpanded" />
        <div className="MovieInfoExpanded">
          <h1 className="MovieTitleExpanded">{movie.Title}</h1>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
