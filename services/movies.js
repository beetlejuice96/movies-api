const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie(id) {
    const movies = await Promise.resolve(moviesMock[0]);
    return movie || {};
  }

  async createMovie() {
    const createMovieId = await Promise.resolve(moviesMock[0].id);
    return createMovieId;
  }

  async updatedMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
  }

  async deleteMovie(id) {
    const deleteMovieId = await Promise.resolve(moviesMock[0].id);
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
