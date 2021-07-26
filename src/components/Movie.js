import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster, genres}) {
  const summarySliceEndPosition = 300;
    return (
      <div className="movie">
          <div className="movie_poster">
            <img src={poster} alt={title}></img>
          </div>
          <div className="movie__data">
            <Link to={{
                    pathname: `/movie/${id}`,
                    state: {
                      year,title,summary, poster, genres
                    }
            }}>
              <h2 className="movie__title">{title}</h2>
            </Link>
            <h4 className="movie__year">{year}</h4>
            <ul className="movie__genres">
              {genres.map((genre, index) => (
                <li className="movie__genre" key={index}>{genre}</li>
              ))}
            </ul>
            <p>{summary.slice(0,summarySliceEndPosition)}...</p>
          </div>
        
      </div>
    );
  }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  export default Movie;