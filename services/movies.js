const MongoLib = require("../lib/mongo");



class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.MongoDB=new MongoLib();
  }
  async getMovies({tags}) {
    const query = tags && {tags:{$in:tags}} 
    const movies = await this.MongoDB.getAll(this.collection,query);
    return movies || [];
  }

  async getMovie({movieId}) {
    const movies = await this.MongoDB.get(this.collection,movieId)
    return movie || {};
  }

  async createMovie({movie}) {
    const createMovieId = await this.MongoDB(this.collection,movie)
    return createMovieId;
  }

  async updatedMovie({movieId,movie}={}) {
    const updatedMovieId = await this.MongoDB(this.collection,movieId,movie)
  }

  async deleteMovie(movieId) {
    const deleteMovieId = await this.MongoDB(this.collection,movieId)
    return deleteMovieId;
  }

  async patchMovie(patchedMovie) {
    console.log(patchedMovie);
    const { movie: newMovie } = patchedMovie;
    let movie = moviesMock[0];
    let movieAux = { ...movie, ...newMovie };
    console.log(movieAux);
    const patchMovieId = await Promise.resolve(movieAux);
    return patchMovieId;
  }
}

module.exports = MoviesService;
