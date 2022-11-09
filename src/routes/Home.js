import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';


class App extends React.Component{
  state = {
    isLoding: true,
  }

  getMovies = async () => {
    const {
      data:{
        data:{ movies }
       }
       } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=raiting')
    //console.log(movies);
    this.setState({movies, isLoding: false});
    

  }

  componentDidMount() {
    /*setTimeout(() => {
      this.setState({isLoding: false});
    }, 3000);*/
    this.getMovies();
  }

render() {
  const {isLoding, movies} = this.state;
  return (
    <section className="container">
      {isLoding ? (
        <div className="loader">
          <spen className="loader_text">Loading... </spen>
          </div>
      )
      : (
        <div className="movies">
       { movies.map((movie) => (
        <Movie 
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres} />
       ))}
      </div>
      )}
      </section>
  );
      }
}



export default App;