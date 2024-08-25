import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`
        );
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie__details">
      <h1 className=" movie__name detials__gap">{movie.Title}</h1>
      <img className="movie__img" src={movie.Poster} alt={movie.Title} />
      <p className="movie__year movie__details--bold detials__gap">Year: {movie.Year}</p>
      <p className="movie__details--bold detials__gap">Genre: {movie.Genre}</p>
      <p className="detials__gap">Director: {movie.Director}</p>
      <p className="detials__gap">Plot: {movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
