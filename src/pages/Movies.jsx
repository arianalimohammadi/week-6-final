import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const navigate = useNavigate;
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayQuery, setDisplayQuery] = useState("");

  const getMovies = async (query) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
      );
      setMovies((data.Search || []).slice(0, 6));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies("batman");
  }, []);

  const onSearch = async (e) => {
    e.preventDefault();
    await getMovies(searchQuery);
  };

  function filterMovies(filter) {
    console.log(filter);
    if (filter === "Latest-Movies") {
      setMovies(movies.slice(0, 6).sort((a, b) => b.Year - a.Year));
    }
    if (filter === "Oldest-Movies") {
      setMovies(movies.slice(0, 6).sort((a, b) => a.Year - b.Year));
    }
  }

  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__row">
            <h1 className="header__title--movies">Immersed Films</h1>
            <form className="search" onSubmit={onSearch}>
              <input
                type="text"
                className="search__input"
                placeholder="Browse..."
                value={displayQuery}
                onChange={(event) => {
                  setDisplayQuery(event.target.value);
                  setSearchQuery(event.target.value);
                }}
              />
              <button className="magnifying__glass" type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </form>
            <select
              id="filter"
              onChange={(event) => filterMovies(event.target.value)}
            >
              <option value="Sort" selected>
                Sort
              </option>
              <option value="Latest-Movies">Latest Movies</option>
              <option value="Oldest-Movies">Oldest Movies</option>
            </select>
            <div className="movie__list">
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <div
                    className="movie"
                    key={movie.imdbID}
                    onClick={() => navigate(`${movie.imdbID}`)}
                  >
                    <Link to={`/movie/${movie.imdbID}`}>
                      <figure>
                        <img
                          className="movie__img"
                          src={movie.Poster}
                          alt={movie.Title}
                        />
                      </figure>
                    </Link>
                    <h3 className="movie__name">{movie.Title}</h3>
                    <p className="movie__year">{movie.Year}</p>
                  </div>
                ))
              ) : (
                <p>No movies found.</p>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Movies;
