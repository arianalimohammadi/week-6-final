import React from 'react'
import MovieNight from '../assets/undraw_movie_night_re_9umk (1).svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <header>
    <div className="header__container">
        <div className="header__row">
            <h2 className="header__subtitle">Watch Your Favorite Movies With</h2>
            <h1 className="header__title">Immersed Films</h1>
            <div className="search__button search__button--hover">
                <Link to="/movies">Browse Movies</Link>
            </div>
            <figure>
                <img src={MovieNight} alt="" />
            </figure>
        </div>
    </div>
</header>
    
  )
}

export default Landing