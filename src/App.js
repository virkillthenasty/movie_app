import React from 'react';
import axios from "axios";
import Movie from "./Movies"

const URL = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component{
  state ={  //컴포넌트의 데이터를 넣는 곳
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    //const movies = await axios.get(URL);
    const {data: { data : {movies}}} = await axios.get(URL);
    //this.setState({isLoading: false});
    console.log(movies)
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){ // render 실행 직후 수행
    this.getMovies();
  }

  render(){
    console.log("render");
    const { isLoading, movies} = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
          ): 
          (
            <div className="movies">
              {
                movies.map(movie => {
                  return <Movie 
                    key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                  })
              }
            </div>
            
          )
        }
        

      </section>

    )
    
    
  }
}

export default App;
