const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),

  watch: true,

  mode: 'development',

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
};
