import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster }) {
    return (
      <div className="movie">
        <div className="movie_poster">
          <img src={poster} alt={title}></img>
        </div>
        <div className="movie__data">
          <h2>{title}</h2>
          <h4>{year}</h4>
          <p>{summary}</p>
        </div>
      </div>
    );
  }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  export default Movie;