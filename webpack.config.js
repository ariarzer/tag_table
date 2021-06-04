import path from 'path';

export default {
  entry: './index.jsx',
  output: {
    path: path.resolve( 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(jsx?)$/, use: 'babel-loader' },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ]
  },
  mode: 'development',
};
