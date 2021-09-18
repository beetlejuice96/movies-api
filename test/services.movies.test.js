const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMcock, getAllStub } = require('../utils/mocks/MongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', () => {
  const MoviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMcock,
  });

  const moviesService = new MoviesServices();

  describe('when getMovies method is called', async () => {
    it('should call the getall mongolib method', async () => {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    });
  });
});
