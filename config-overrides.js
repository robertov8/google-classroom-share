const path = require('path');

module.exports = {
  paths(paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'src/example/index.js');
    paths.appSrc = path.resolve(__dirname, 'src');

    return paths;
  },
};
