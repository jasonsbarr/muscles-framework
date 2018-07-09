const path = require('path');

module.exports = {
  entry: './src/js/muscles.js',

  output: {
    filename: 'muscles.js',
    path: path.resolve(__dirname, 'dist/js')
  } 
}