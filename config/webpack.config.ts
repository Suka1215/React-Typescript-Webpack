import * as path from 'path';
import * as webpack from 'webpack';
// tslint:disable-next-line:no-var-requires
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PROJECT_PATH_ROOT = path.resolve(__dirname, '../');
const ASSETS_PATH = path.resolve(PROJECT_PATH_ROOT, './dist');

const config: webpack.Configuration = {
  context: path.resolve(__dirname, '..'),
  entry: './src/app.tsx',
  output: {
    path: ASSETS_PATH,
    publicPath: '/',
    filename: 'bundle.min.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'react': 'React',
      'react-dom': 'ReactDOM',
    }),
  ],
};

export default config;
