const { config } = require('../config');

function cacheResponse(res, seconds) {
  if (config.enviroment === 'production') {
    console.log('holaaaa');
    res.set('Cache-Control', `public,max-age=${seconds}`);
  }
}

module.exports = cacheResponse;
