import React, {Component} from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends Component {
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async () =>  {
    const movieFromDb = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movieFromDb, "start getMovies");
    this.setState({ movies :movieFromDb.data.data.movies , isLoading: false });
  }

  componentDidMount () {
    this.getMovies();
  }
 
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
              ))}
      </div>
    );
  }
}

export default App;
